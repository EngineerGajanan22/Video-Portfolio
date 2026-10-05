const sanitizeValue = (value = '') => String(value).replace(/[<>]/g, '').trim();

export async function saveCollaborationSubmission(submission) {
  const cleanedSubmission = {
    name: sanitizeValue(submission.name),
    email: sanitizeValue(submission.email).toLowerCase(),
    message: sanitizeValue(submission.message),
    date: submission.submittedAt || new Date().toLocaleString(),
  };

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('Supabase not configured. Using localStorage fallback.');
    return { persisted: false, mode: 'local-storage-fallback' };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/collaborations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(cleanedSubmission),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase error:', errorText);
      throw new Error(errorText || 'Supabase insert failed');
    }

    console.log('Submission saved to Supabase');
    return { persisted: true, mode: 'supabase' };
  } catch (error) {
    console.warn('Supabase save failed, falling back to local storage:', error.message);
    return { persisted: false, mode: 'local-storage-fallback' };
  }
}

export async function fetchCollaborationSubmissions() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('Supabase not configured. Skipping fetch.');
    return [];
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/collaborations?order=created_at.desc`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch submissions');
    }

    const data = await response.json();
    return data.map((item) => ({
      id: String(item.id),
      name: item.name,
      email: item.email,
      message: item.message,
      date: item.date,
    }));
  } catch (error) {
    console.warn('Failed to fetch submissions from Supabase:', error.message);
    return [];
  }
}
