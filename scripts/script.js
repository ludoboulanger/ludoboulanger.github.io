let isHeaderHidden = true;
let isNavbarHidden = true;

// Fixed Header
const moveHeaderText = () => {
  const header = document.getElementById('header');

  if (isNavbarHidden) {

    header.classList.remove('header-move-right');
    header.classList.add('header-move-left');

  } else {
    header.classList.remove('header-move-left');
    header.classList.add('header-move-right');
  }

  console.log(header.classList);
};

const createFixedHeader = () => {
  const header = document.getElementById('header');
  const iconPath = document.getElementById('navBarIconPath');

  if (window.pageYOffset !== 0) {
    isHeaderHidden = false;
    toggleNavItemColor();
    header.classList.remove('header-bar-fadeOut');
    header.classList.add('header-bar-fadeIn');
    iconPath.style.fill = "gainsboro";

  } else {
    isHeaderHidden = true;
    toggleNavItemColor();
    header.classList.remove('header-bar-fadeIn');
    header.classList.add('header-bar-fadeOut');
    iconPath.style.fill = "var(--text-dark)";
  }
};

const toggleNavItemColor = () => {
  const root = document.querySelector(':root');
  const navbar = document.getElementById('navbar-ul');

  for (child of navbar.children) {
    if (isHeaderHidden && !isNavbarHidden) {
      child.children[0].className = 'text-dark';
      root.style.setProperty('--underline-color', '#252729');
    } else if (!isNavbarHidden) {
      child.children[0].className = 'text-light';
      root.style.setProperty('--underline-color', 'gainsboro');
    }
  }
}

const toggleNavbar = (e) => {
  e.preventDefault();
  const navbar = document.getElementById('navbar');
  const iconPath = document.getElementById('navBarIconPath');

  if (isNavbarHidden) {
    isNavbarHidden = false;
    toggleNavItemColor();
    navbar.classList.remove('nav-bar-close');
    navbar.classList.add('nav-bar-open');
    navbar.style.fill = "gainsboro";

  } else {
    isNavbarHidden = true;
    navbar.classList.remove('nav-bar-open');
    navbar.classList.add('nav-bar-close');
    if (window.pageYOffset === 0) {
      iconPath.style.fill = "#252729";
    } else {
      iconPath.style.fill = "gainsboro";
    }
  }
};

// Listeners
window.addEventListener('scroll', createFixedHeader);

let icon = document.getElementById('hamburger-menu');

icon.addEventListener('click', event => toggleNavbar(event));