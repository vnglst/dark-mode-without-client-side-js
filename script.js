const lightForm = document.getElementById("light-form");
const darkForm = document.getElementById("dark-form");

lightForm.onsubmit = function (e) {
  e.preventDefault();
  fetch(lightForm.action, { method: "POST" });
  document.documentElement.className = "dark";
};

darkForm.onsubmit = function (e) {
  e.preventDefault();
  fetch(darkForm.action, { method: "POST" });
  document.documentElement.className = "light";
};
