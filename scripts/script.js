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
    header.style.boxShadow = '0 -4px 7px black';
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
  const navbar = document.getElementById('navbar-ul');

  for (child of navbar.children) {
    if (isHeaderHidden && !isNavbarHidden) {
      console.log(child.children);
      child.children[0].style.color = 'var(--text-dark)';
    } else if (!isNavbarHidden) {
      child.children[0].style.color = 'var(--text-light)';
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