const colorMode = document.getElementById("theme");
const icons = document.querySelector(".side-nav-div-icon");
const menuButton = document.getElementById("menuToggle");
const navButtonTitle = document.querySelector(".side-nav-div-title");
let mode = "Dark";
let collapse = "";

colorMode.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
  let colorModeImg = `<img class="side-nav-div-icon" src="Assets/${mode}.png" /><span class="side-nav-div-title ${collapse} ">${mode} Mode</span>`;
  mode = mode == "Light" ? "Dark" : "Light";
  colorMode.innerHTML = colorModeImg;
});

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("open");
  const hideText = document.querySelectorAll(
    ".side-nav-div-search, .side-nav-div-title, .side-profile-title",
  );
  // navSearchBox.classList.toggle("hide");
  hideText.forEach(function (el) {
    el.classList.toggle("hide");
  });
  collapse = collapse == "hide" ? "" : "hide";
});
