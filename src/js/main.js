//VARIABLES FOR HANDLING CAROUSEL IN ARTICLES SECTION
const next = document.querySelector('.right')
const prev = document.querySelector('.left')
const carousel = document.querySelector('.articles__carousel')
const squares = document.querySelectorAll('.articles__square')
let sectionIndex = 0

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