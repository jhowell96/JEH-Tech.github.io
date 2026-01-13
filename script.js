(() => {
  const yearEl = document.getElementById("year");
  const statusTextEl = document.getElementById("status-text");
  const statusDot = document.querySelector(".status-dot");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Simple availability indicator (edit copy as needed)
  if (statusTextEl) statusTextEl.textContent = "Taking on new projects — typically responding within 1–2 business days.";
  if (statusDot) {
    statusDot.style.background = "#34d399";
    statusDot.style.boxShadow = "none";
  }
})();

