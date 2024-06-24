// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu-nav').onclick = () => {
  navbarNav.classList.toggle('active');
};
// klik luar nav
const menuuu = document.querySelector('#menu-nav');
document.addEventListener('click', function (e) {
  if (!menuuu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active')
  }
});
