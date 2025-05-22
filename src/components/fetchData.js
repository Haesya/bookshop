import {renderOneBook} from "./OneBook.js";

export const fetchData = async (currentUrl, childrenBooks = 0) => {
    const response = await fetch(currentUrl);
    const data = await response.json();

    let bookList = []
    for (let i = 0; i < 6; i++) {
        const book = document.createElement('div')
        book.classList.add('book')
        let bookInfoList = renderOneBook(data, i, childrenBooks)
        book.appendChild(bookInfoList.bookCover)
        book.appendChild(bookInfoList.bookInfo)
        bookList.push(book)
        childrenBooks++
    }

    return bookList
};