const lightForm = document.getElementById("light-form");
const darkForm = document.getElementById("dark-form");

lightForm.onsubmit = function (e) {
  // TODO: Refactor to one handler
  e.preventDefault();
  fetch(lightForm.action, { method: "POST" });
  document.documentElement.classList.add("dark");
  document.getElementById("dark-button").focus();
};

darkForm.onsubmit = function (e) {
  e.preventDefault();
  fetch(darkForm.action, { method: "POST" });
  document.documentElement.classList.remove("dark");
  document.getElementById("light-button").focus();
};
