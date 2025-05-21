import { images } from '../data/picturesForSlider.js'

export function renderSliderForm() {
    const slider = document.createElement('div');
    slider.classList.add('slider')
    const sliderPictures = document.createElement('div')
    sliderPictures.classList.add('slider__pictures')
    slider.appendChild(sliderPictures)
    const image = document.createElement('img')
    image.classList.add('slider__picture')
    image.src = images[0]
    image.alt = `banner1`
    sliderPictures.append(image)

    const balls = document.createElement('div')
    balls.classList.add('balls')
    slider.appendChild(balls)

    for (let i= 0; i < images.length; i++){
        const ball = document.createElement('div')
        ball.classList.add('ball')
        ball.addEventListener('click', () => {
            changeDataAndBalls(i)
        })
        balls.appendChild(ball)
        /*и всем шарикам кроме первого задаем свойство невыбранности*/
        if (i > 0) {
            ball.classList.add('main__ball__notSelected')
        } else {
            ball.classList.add('main__ball__selected')
        }
    }

    /*смена картинки*/
    function changeDataAndBalls (current){
        /*меняем картинку*/
        image.src = images[current]
        for(let i = 0; i < balls.children.length; i++) {
            balls.children[i].classList.replace("main__ball__selected", "main__ball__notSelected")
        }
        /*кроме одного выбранного*/
        balls.children[current].classList.replace("main__ball__notSelected", "main__ball__selected")
    }

    return slider;
}