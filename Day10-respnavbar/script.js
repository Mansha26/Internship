const sidenav = document.getElementById('sideshow');
const navMenu = document.getElementById('navbar');

sidenav.addEventListener('click', () => {
    // 3. Toggle the 'active' class on the nav menu

    navMenu.classList.toggle('active');
});