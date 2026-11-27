function initMousePointerTracker() {
  const pad = document.getElementById("tracker-pad");
  const dot = document.getElementById("dot");
  const coords = document.getElementById("coords");

  if (!pad || !dot || !coords) return;

  pad.addEventListener("mousemove", (event) => {
    const rect = pad.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    coords.textContent = `Pointer inside pad — X: ${x}px, Y: ${y}px`;
  });

  pad.addEventListener("mouseleave", () => {
    coords.textContent = "Mouse left the tracking pad";
  });
}