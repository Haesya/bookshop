import {categories} from "../data/categories.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";
import {makeUrl} from "../data/url.js";

export function renderCategoriesForm() {
    const booksCategories = document.createElement('div')
    booksCategories.classList.add('categories')

    for (let i = 0; i < Object.keys(categories).length; i++) {
        const category = document.createElement('div')
        category.classList.add('category')
        if (i == 0) {
            category.classList.add('category__select')
        }
        category.addEventListener('click', () => {
            const content = document.querySelector('.content')

            /*клирим книги*/
            if (content) {
                const iWannaDelete = content.querySelector('.books')
                content.removeChild(iWannaDelete)
            }

            let url = makeUrl()
            /*рендерим книги с нужной категорией*/
            content.appendChild(renderBooksFromCategory(url, Object.values(categories)[i]))
            for (let key of booksCategories.children) {

                /*выбранной категории - "выбранная категория"*/
                key.classList.remove('category__select')
            }

            /*невыбранным категориям - грустно*/
            category.classList.add('category__select')
        })
        category.innerText = `${Object.keys(categories)[i]}`
        booksCategories.appendChild(category)
    }

    return booksCategories;
}