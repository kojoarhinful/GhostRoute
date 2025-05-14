/**
 * Removes trailing slashes from the URL and updates the browser history.
 * @returns {void}
 */
function ghostRoute() {
  
  if (typeof window === 'undefined' || !window.location || !window.history) {
    console.warn('ghostRoute: Window or history API unavailable');
    return;
  }
  
  try {
    const path = window.location.pathname;
    
    const cleanPath = path.replace(/\/+$/, '').replace(/\/+/g, '/');
    
    if (cleanPath !== path) {
      window.history.replaceState(null, '', cleanPath || '/');
    }
  } catch (error) {
    console.error('ghostRoute: Failed to update URL', error);
  }
}

// Run on page load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ghostRoute, { once: true });
  } else {
    ghostRoute();
  }
}

// Export for module usage
export { ghostRoute };