const lightForm = document.getElementById("light-form");
const darkForm = document.getElementById("dark-form");

lightForm.onsubmit = function (e) {
  e.preventDefault();
  fetch(lightForm.action, { method: "POST" });
  document.documentElement.className = "dark";
  document.getElementById("dark-button").focus();
};

darkForm.onsubmit = function (e) {
  e.preventDefault();
  fetch(darkForm.action, { method: "POST" });
  document.documentElement.className = "light";
  document.getElementById("light-button").focus();
};
