
let position = 0
const slidesToShow = 1
const slidesToScroll = 1

const sliderTrack = document.querySelector('.reviews__block')
const sliderItem = document.querySelectorAll('.reviews')



const itemCount = sliderItem.length;



const arrowPrev = document.querySelector('#arrowPrev')
const arrowNext = document.querySelector('#arrowNext')

const itemWidth = sliderTrack.clientWidth / slidesToShow

const movePosition = slidesToScroll * itemWidth

sliderItem.forEach(el => {
    el.style.maxWidth = `${itemWidth}px`
});

arrowNext.addEventListener('click', () => {
    const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    setPosition()
    checkBtn()
})

arrowPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemWidth;

    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition()
    checkBtn()
})


const setPosition = () => {
    sliderItem.forEach(el => {
        el.style.transform = `translateX(${position}px)`
    });
}

const checkBtn = () => {
    arrowPrev.disabled = position === 0
    arrowNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth
}

checkBtn()
