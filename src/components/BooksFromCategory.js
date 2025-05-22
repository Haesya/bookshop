import {makeUrl} from "../data/url.js"
import {fetchData} from "./fetchData.js";

export function renderBooksFromCategory(url, CategoryName = 'Architecture') {

    const books = document.createElement('div')
    books.classList.add('books')

    let currentUrl = makeUrl(CategoryName)

    fetchData(currentUrl).then(result => result.forEach((elem) => {books.appendChild(elem)}));

    return books;
}
