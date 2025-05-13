function ghostRoute() {
  const path = window.location.pathname;
  const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;

  if (cleanPath !== path) {
    window.history.replaceState(null, '', cleanPath);
  }
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ghostRoute);
} else {
  ghostRoute();
}

// Make it available globally for inline use
window.ghostRoute = ghostRoute;


