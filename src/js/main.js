//VARIABLES FOR HANDLING CAROUSEL IN ARTICLES SECTION
const next = document.querySelector('.right')
const prev = document.querySelector('.left')
const carousel = document.querySelector('.articles__carousel')
const squares = document.querySelectorAll('.articles__square')
let sectionIndex = 0
//VARIABLE FOR FOOTER YEAR
const footerYear = document.querySelector('.footer__year')
//VARIABLES FOR MOBILE NAVIGATION 
const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile__items')
const navMobileItems = document.querySelectorAll('.nav-mobile__item')

//FUNCTIONS FOR HANDLING CAROUSEL IN ARTICLES SECTION 
const reset = () => {
    clearInterval(startCarousel)
    startCarousel = setInterval(handleNextButton, 4000)
    for (let i = 0; i < carousel.children.length; i++) {
        carousel.children[i].style.opacity = 0
        carousel.children[i].style.zIndex = 0
    }
}

const handleSquares = () => {
    if (sectionIndex == 0) {
        squares[0].classList.add('square-active')
        squares[1].classList.remove('square-active')
        squares[2].classList.remove('square-active')
    }

    if (sectionIndex == 1) {
        squares[1].classList.add('square-active')
        squares[0].classList.remove('square-active')
        squares[2].classList.remove('square-active')
    }

    if (sectionIndex == 2) {
        squares[2].classList.add('square-active')
        squares[1].classList.remove('square-active')
        squares[0].classList.remove('square-active')
    }
}

const handleNextButton = () => {
    reset()
    if (sectionIndex < 2) {
        sectionIndex++

    } else {
        sectionIndex = 0
    }
    handleSquares()
    carousel.children[sectionIndex].style.zIndex = 1;
    carousel.children[sectionIndex].style.opacity = 1;
}

const handlePrevButton = () => {
    reset()
    if (sectionIndex > 0) {
        sectionIndex--
    } else {
        sectionIndex = 2
    }
    handleSquares()
    carousel.children[sectionIndex].style.zIndex = 1;
    carousel.children[sectionIndex].style.opacity = 1;
}

let startCarousel = setInterval(handleNextButton, 4000)

next.addEventListener('click', handleNextButton)
prev.addEventListener('click', handlePrevButton)

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