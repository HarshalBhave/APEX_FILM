const mobile_nav = document.querySelector('.mobile-navbar');
const nav_navbar = document.querySelector('nav')
const toggleNavbar = () => {
    nav_navbar.classList.toggle('active')
}


mobile_nav.addEventListener('click' ,() => toggleNavbar());