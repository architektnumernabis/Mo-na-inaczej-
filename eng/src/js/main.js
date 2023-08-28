
//VARIABLE FOR FOOTER YEAR
const footerYear = document.querySelector('.footer__year')
//VARIABLES FOR MOBILE NAVIGATION 
const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile__items')
const navMobileItems = document.querySelectorAll('.nav-mobile__item')
//VARIABLES FOR SCROLLSPY
const allDesktopNavItems = document.querySelectorAll('.nav-desktop__item')
const allSections = document.querySelectorAll('.section')


//FUNCTION THAT CHANGES FOOTER YEAR
const changeFooterYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

changeFooterYear();

//FUNCTION THAT CHANGES NAV-DESKTOP BACKGROUND COLOR AFTER SCROLLING
document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.nav-desktop')

    function addShadow() {
        if (window.scrollY >= 200) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)
})

//FUNCTION THAT HANDLES MOBILE NAVIGATION 
const handleMobileNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile__items--active')
    document.body.classList.toggle('body-no-scroll')

    navMobileItems.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.remove('is-active')
            navMobile.classList.remove('nav-mobile__items--active')
            document.body.classList.remove('body-no-scroll')
        })
    })
}

navBtn.addEventListener('click', handleMobileNav)

//FUNCTION FOR SCROLLSPY 
const handleScrollSpy = () => {

    allSections.forEach(section => {

        let top = window.scrollY
        let offset = section.offsetTop - 200
        let height = section.offsetHeight
        let currentWidth = window.innerWidth
        let id = section.getAttribute('id')

        if (currentWidth >= 576 && top >= offset && top < offset + height) {
            allDesktopNavItems.forEach(item => {
                item.classList.remove('active')
                document.querySelector('.nav-desktop__item[href*=' + id + ']').classList.add('active')
            })
        } else if (top >= offset && top < offset + height) {
            navMobileItems.forEach(item => {
                    item.classList.remove('active')
                    document.querySelector('.nav-mobile__item[href*=' + id + ']').classList.add('active')
                }

            )
        }


    })
}

window.addEventListener('scroll', handleScrollSpy)