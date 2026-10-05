export {
  fetchCollaborations,
  saveCollaboration,
  getLocalCollaborations,
  saveLocalCollaborations,
  isValidEmail,
  formatSubmissionDate,
  // Compatibility aliases
  fetchCollaborations as fetchCollaborationSubmissions,
  saveCollaboration as saveCollaborationSubmission,
} from '../services/collaborationService';
