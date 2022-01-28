const burger = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementById('navlinks')

burger.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})