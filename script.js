//your JS code here. If required.
const container = document.getElementById("container");

// Change pseudo-element text dynamically via CSS variables
function updatePseudoElements(beforeText, afterText) {
  container.style.setProperty("--before-text", `"${beforeText}"`);
  container.style.setProperty("--after-text", `"${afterText}"`);
}

// Example usage: change texts after 2 seconds
setTimeout(() => {
  updatePseudoElements("🚀 Hello Before", "Goodbye After 🌟");
}, 2000);