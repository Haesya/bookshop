import {buyBookClick} from "./BuyBook.js";

export function renderOneBook(data, i) {
    /*создали одну книгу*/
    const book = document.createElement('div')
    book.classList.add('book')

    /*обложка*/
    const bookCover = document.createElement('div')
    bookCover.classList.add('book__cover')
    const cover = document.createElement('img')
    cover.src = data.items[i].volumeInfo.imageLinks.thumbnail
    cover.alt = 'banner'
    bookCover.appendChild(cover)

    /*информационный раздел у книги*/
    const bookInfo = document.createElement('div')
    bookInfo.classList.add('book__info')

    /*в инфо разделе создаем автора*/
    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book__author')
    bookAuthor.innerText = data.items[i].volumeInfo.authors
    bookInfo.appendChild(bookAuthor)

    /*название книги*/
    const bookName = document.createElement('div')
    bookName.classList.add('book__name')
    bookName.innerText = data.items[i].volumeInfo.title
    bookInfo.appendChild(bookName)

    /*рейтинг книги*/
    if (data.items[i].volumeInfo.ratingsCount) {
        const bookRating = document.createElement('div')
        bookRating.classList.add('book__rating')

        /*звездочки*/
        const bookRatingStars = document.createElement('div')
        bookRatingStars.classList.add('book__rating__stars')
        bookRatingStars.innerText = data.items[i].volumeInfo.ratingsCount

        /*циферки*/
        const bookRatingReviews = document.createElement('div')
        bookRatingReviews.classList.add('book__rating__reviews')
        bookRatingReviews.innerText = data.items[i].volumeInfo.averageRating

        bookInfo.appendChild(bookRating)
        bookRating.appendChild(bookRatingStars)
        bookRating.appendChild(bookRatingReviews)
    }

    /*описание книги*/
    if (data.items[i].volumeInfo.description) {
        const bookDescription = document.createElement('div')
        bookDescription.classList.add('book__description')
        if (data.items[i].volumeInfo.description.length > 100)
            bookDescription.innerText = data.items[i].volumeInfo.description.slice(0, 99)
        bookInfo.appendChild(bookDescription)
    }

    /*цена книги*/
    if (data.items[i].saleInfo.isEbook === true) {
        const bookPrice = document.createElement('div')
        bookPrice.classList.add('book__price')
        bookPrice.innerText = data.items[i].saleInfo.listPrice.amount
        bookInfo.appendChild(bookPrice)
    }

    /*еще что-то с кнопкой купить книгу сделать надо я хз*/
    const buyBook = document.createElement('button')
    buyBook.classList.add('buy__book')
    buyBook.innerText = "BUY NOW"
    buyBook.addEventListener("click", () => {
        buyBookClick()
    })

    /*и по порядку теперь остатки запихиваем в инфо*/

    bookInfo.appendChild(buyBook)

    return {
        bookCover,
        bookInfo
    };
}