(() => {
  const yearEl = document.getElementById("year");
  const statusTextEl = document.getElementById("status-text");
  const statusDot = document.querySelector(".status-dot");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Basic “are we on Pages?” signal:
  const isGitHubPages = window.location.host.endsWith("github.io");

  // Show a nicer status message
  if (statusTextEl) {
    if (isGitHubPages) {
      statusTextEl.textContent = `Live on GitHub Pages (${window.location.host})`;
      if (statusDot) {
        statusDot.style.background = "#34d399";
        statusDot.style.boxShadow = "0 0 0 4px rgba(52, 211, 153, 0.18)";
      }
    } else {
      statusTextEl.textContent = "Running locally (not github.io) — push to main to deploy.";
      if (statusDot) {
        statusDot.style.background = "#fbbf24";
        statusDot.style.boxShadow = "0 0 0 4px rgba(251, 191, 36, 0.18)";
      }
    }
  }
})();
