/**
 * Collaboration & Contact Service
 * Supports serverless persistent databases (Supabase, Firebase, or custom REST API)
 * with robust local caching, input sanitization, and graceful offline fallback.
 */

// Basic input sanitization to prevent XSS
export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
};

// Email format validation
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).trim());
};

// Format submission date nicely (e.g. "Submitted: 06 October 2026, 03:25 AM")
export const formatSubmissionDate = (dateObj = new Date()) => {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return `Submitted: ${new Intl.DateTimeFormat('en-GB', options).format(dateObj)}`;
};

const LOCAL_STORAGE_KEY = 'portfolio_collaborations';

// Initial default sample matching user's illustration
const DEFAULT_COLLABORATIONS = [
  {
    id: 'sample-1',
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    message: 'Hi Gajanan, I would like to collaborate with you on a web development project.',
    date: 'Submitted: 06 October 2026, 02:15 AM'
  }
];

// Helper: load from localStorage
export const getLocalCollaborations = () => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Could not read collaborations from localStorage:', err);
  }
  return DEFAULT_COLLABORATIONS;
};

// Helper: save to localStorage
export const saveLocalCollaborations = (collaborations) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collaborations));
  } catch (err) {
    console.warn('Could not write collaborations to localStorage:', err);
  }
};

/**
 * Fetch collaborations from persistent cloud backend (Supabase / Firebase / REST)
 * Falls back to local cached storage if no backend is configured or on network error.
 */
export const fetchCollaborations = async () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const firebaseDbUrl = import.meta.env.VITE_FIREBASE_DB_URL;
  const customApiUrl = import.meta.env.VITE_COLLABORATIONS_API_URL;

  // 1. Try Supabase if configured
  if (supabaseUrl && supabaseAnonKey) {
    try {
      const res = await fetch(
        `${supabaseUrl.replace(/\/+$/, '')}/rest/v1/collaborations?select=*&order=created_at.desc&limit=30`,
        {
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            Accept: 'application/json'
          }
        }
      );
      if (res.ok) {
        const data = await res.json();
        const mapped = data.map((item) => ({
          id: item.id || String(item.created_at),
          name: sanitizeInput(item.name),
          email: sanitizeInput(item.email),
          message: sanitizeInput(item.message),
          date: item.date || (item.created_at ? formatSubmissionDate(new Date(item.created_at)) : formatSubmissionDate())
        }));
        saveLocalCollaborations(mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase fetch failed, using local cache:', err);
    }
  }

  // 2. Try Firebase Realtime DB if configured
  if (firebaseDbUrl) {
    try {
      const res = await fetch(`${firebaseDbUrl.replace(/\/+$/, '')}/collaborations.json`);
      if (res.ok) {
        const data = await res.json();
        if (data) {
          const list = Object.keys(data).map((key) => ({
            id: key,
            name: sanitizeInput(data[key].name),
            email: sanitizeInput(data[key].email),
            message: sanitizeInput(data[key].message),
            date: data[key].date || formatSubmissionDate()
          })).reverse();
          saveLocalCollaborations(list);
          return list;
        }
      }
    } catch (err) {
      console.warn('Firebase fetch failed, using local cache:', err);
    }
  }

  // 3. Try custom REST API if configured
  if (customApiUrl) {
    try {
      const res = await fetch(customApiUrl, {
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          saveLocalCollaborations(data);
          return data;
        }
      }
    } catch (err) {
      console.warn('Custom API fetch failed, using local cache:', err);
    }
  }

  // Fallback to local cache
  return getLocalCollaborations();
};

/**
 * Save a new collaboration request to the persistent cloud backend and local cache.
 */
export const saveCollaboration = async ({ name, email, message }) => {
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);
  const submissionDate = formatSubmissionDate();

  const newEntry = {
    id: Date.now().toString(),
    name: sanitizedName || 'Anonymous Visitor',
    email: sanitizedEmail,
    message: sanitizedMessage,
    date: submissionDate
  };

  // 1. Optimistically update local cache
  const localList = getLocalCollaborations();
  const updatedList = [newEntry, ...localList.filter((item) => item.id !== newEntry.id)];
  saveLocalCollaborations(updatedList);

  // 2. Persist to Cloud if configured
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const firebaseDbUrl = import.meta.env.VITE_FIREBASE_DB_URL;
  const customApiUrl = import.meta.env.VITE_COLLABORATIONS_API_URL;

  if (supabaseUrl && supabaseAnonKey) {
    try {
      await fetch(`${supabaseUrl.replace(/\/+$/, '')}/rest/v1/collaborations`, {
        method: 'POST',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({
          name: newEntry.name,
          email: newEntry.email,
          message: newEntry.message,
          date: newEntry.date
        })
      });
    } catch (err) {
      console.warn('Supabase save failed:', err);
    }
  } else if (firebaseDbUrl) {
    try {
      await fetch(`${firebaseDbUrl.replace(/\/+$/, '')}/collaborations.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
    } catch (err) {
      console.warn('Firebase save failed:', err);
    }
  } else if (customApiUrl) {
    try {
      await fetch(customApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
    } catch (err) {
      console.warn('Custom API save failed:', err);
    }
  }

  return newEntry;
};

// Aliases for compatibility
export const saveCollaborationSubmission = saveCollaboration;
export const fetchCollaborationSubmissions = fetchCollaborations;
