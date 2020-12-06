const toggleSideBar = () => {
  const sidebar = document.getElementById('sidebar');
  const icon = document.getElementById('navBarIconPath');

  if (sidebar.style.width === '') {
    sidebar.style.width = '10rem';
    icon.style.fill = "gainsboro";
  } else {
    sidebar.style.width = '';
    icon.style.fill = " #252729";
  }
};