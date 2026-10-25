// Configuration for local development
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3001' 
  : '';

// Update HTMX configuration for local development
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hostname === 'localhost') {
    // Override all API calls to use localhost backend
    document.body.addEventListener('htmx:configRequest', function(evt) {
      if (evt.detail.path.startsWith('/api/')) {
        evt.detail.path = API_BASE_URL + evt.detail.path;
      }
    });
    
    console.log('🔧 Local development mode: API calls routed to', API_BASE_URL);
  }
});