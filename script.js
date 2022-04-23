const form = document.getElementById("toggle-form");

form.onsubmit = function (e) {
  e.preventDefault();
  fetch(form.action, { method: "POST" });
  const current = getComputedStyle(
    document.getElementById("toggle-label"),
    "::after",
  ).content;
  const next = current == '"light"' ? "dark" : "light";
  document.documentElement.className = next;
};
