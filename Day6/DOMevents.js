// Events are signals that something has occurred. (user inputs/actions)
 function updateStatus(message) {
  const statusEl = document.getElementById("status-text");
  if (statusEl) {
    statusEl.textContent = `Status: ${message}`;
  }
}

function toggleBoxHighlight(boxId) {
  const box = document.getElementById(boxId);
  if (box) {
    box.classList.toggle("highlight");
    return box.classList.contains("highlight");
  }
  return false;
}