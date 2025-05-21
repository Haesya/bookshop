import {renderOneBook} from "./OneBook.js";
import {url1, url2} from "../data/url.js"

export function renderBooksFromCategory(CategoryName = 'Architecture') {
    let url = url1 + CategoryName + url2

    const books = document.createElement('div')
    books.classList.add('books')

    /*создаем поле для книг, в которое будем запихивать 6 книг по отдельности*/
    /*достаем данные с google books api*/
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        let bookList = []
        for (let i = 0; i < 6; i++) {
            const book = document.createElement('div')
            book.classList.add('book')
            let bookInfoList = renderOneBook(data, i)
            book.appendChild(bookInfoList.bookCover)
            book.appendChild(bookInfoList.bookInfo)
            bookList.push(book)
        }

        return bookList
    };

    fetchData().then(result => result.forEach((elem) => {books.appendChild(elem)}));

    return books;
}
