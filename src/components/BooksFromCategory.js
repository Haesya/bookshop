import {renderOneBook} from "./OneBook.js";

export function renderBooksFromCategory(CategoryName = 'Art & Fashion') {
    /*меняем ссылку на нужную категорию*/
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${CategoryName}"&key=AIzaSyAlIeGyOujclVGHf35-htRC99WUBGNh7Ak&printType=books&startIndex=0&maxResults=6&langRestrict=en`

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
