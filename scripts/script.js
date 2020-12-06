const toggleSideBar = () => {
  const sidebar = document.getElementById('sidebar');
  const iconPath = document.getElementById('navBarIconPath');
  const icon = document.getElementById('navBarIcon')

  if (sidebar.style.width === '') {
    sidebar.style.width = '10rem';
    sidebar.style.boxShadow = '-4px 0 7px black';
    iconPath.style.fill = "gainsboro";
    icon.style.position = 'fixed';

  } else {
    sidebar.style.width = '';
    iconPath.style.fill = " #252729";
    icon.style.position = 'absolute';
  }
};