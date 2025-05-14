const images = [
    {
        img: '../public/banner1.png',
    },
    {
        img: '../public/banner2.png',
    },
    {
        img: '../public/banner3.png',
    }
]

/*сначала задаем странице все параметры первого объекта из entities, чтобы при загрузке страницы уже что-то было*/
/*слайдер со стрелочками и шариками*/
const balls = document.querySelector('.balls')
/*по циклу создаем количество шариков*/
for (let i= 0; i < images.length; i++){
    const ball = document.createElement('div')
    ball.classList.add('ball')
    balls.appendChild(ball)
    /*и всем шарикам кроме первого задаем свойство невыбранности*/
    if (i > 0) {
        ball.classList.add('main__ball__notSelected')
    } else {
        ball.classList.add('main__ball__selected')
    }
}
/*задаем начальную картинку слайдеру*/
const insideSlider = document.querySelector('.slider__pictures')
const image = document.createElement('img')
image.classList.add('slider__picture')
image.src = images[0].img
image.alt = 'banner1'
insideSlider.append(image)


/*==================================== ПРИКРУЧИВАЕМ КЛИКИ ====================================*/
//запомнили, что вообще на экране сейчас происходит, чтобы по этому датчику все менять
//на экране происходят данные первого (нулевого) объекта

let currentData = 0; //какие данные сейчас выводим на экран

/*смена картинки*/
function changeDataAndBalls (current){
    /*меняем картинку*/
    image.src = images[current].img
    for(let i = 0; i < balls.children.length; i++) {
        balls.children[i].classList.replace("main__ball__selected", "main__ball__notSelected")
    }
    /*кроме одного выбранного*/
    balls.children[current].classList.replace("main__ball__notSelected", "main__ball__selected")
}

/*КЛИКНУЛИ НА КОНКРЕТНЫЙ ШАРИК*/
const ballsForClick = document.querySelectorAll('.ball')
ballsForClick.forEach((ball, index) => {
    ball.addEventListener('click', () => {
        changeDataAndBalls(index)
        currentData = index
    })
})