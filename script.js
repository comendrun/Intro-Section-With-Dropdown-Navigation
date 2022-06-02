const navbar = document.getElementById("side-navbar-container");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const featuresNavMenu = document.getElementById("features-nav-menu");
const companyNavMenu = document.getElementById("company-nav-menu");
const overlay = document.getElementById("overlay");
const allControlers = document.getElementsByClassName("controller");
//i declare the function in here to prevent anchor tags to act their default behaviour (reloading the page)
const allAnchorTags = document.getElementsByTagName("a");
for (let i = 0; i < allAnchorTags.length; i++) {
  allAnchorTags[i].onclick = (e) => {
    e.preventDefault();
  };
}

//hre we declare a function to be able to open the sidebar when in mobile view. its only available in mobile view
function sideBarMenu(element) {
  element.addEventListener("click", () => {
    navbar.classList.toggle("activated");
    overlay.classList.toggle("hidden");
  });
}
//and also i add a new option to collapse the sidenav when we click outside of the sidebar
overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  navbar.classList.remove("activated");
});

sideBarMenu(openMenu);
sideBarMenu(closeMenu);

//========//
//this function is to expand the list of the items in the navbar for two of them. features and also company who had expandable navs
function showNavList(element) {
  const controller = element.parentElement;
  const dropDownButton = controller.querySelector(".drop-down");
  const dropBackButton = controller.querySelector(".drop-back");
  const list = controller.querySelector(".list");

  dropBackButton.classList.toggle("hidden");
  dropDownButton.classList.toggle("hidden");
  list.classList.toggle("hidden");
}

function openListOfNavElements(element) {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    showNavList(element);
  });
}
//and here i call above function for thos two navs
openListOfNavElements(companyNavMenu);
openListOfNavElements(featuresNavMenu);
