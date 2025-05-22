import {makeUrl} from "../data/url.js";
import {categories} from "../data/categories.js";
import {fetchData} from "./fetchData.js";

export function loadMoreBooks (){
    /*какая сейчас категория есть*/
    const CategorySelect = document.querySelector('.category__select')
    let CategoryName = categories[CategorySelect.innerText]

    /*сколько сейчас книг загружено*/
    const books = document.querySelector('.books')
    const childrenBooks = books.children.length

    /*создали новый юрл для дозагрузки*/
    let url = makeUrl(CategoryName, childrenBooks)

    /*дозагрузили данные*/
    fetchData(url, childrenBooks).then(result => result.forEach((elem) => {books.appendChild(elem)}));
}