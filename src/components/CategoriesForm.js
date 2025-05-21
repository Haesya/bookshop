import {categories} from "../data/categories.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";

export function renderCategoriesForm (url){
    const booksCategories = document.createElement('div')
    booksCategories.classList.add('categories')

    for (let i = 0; i < Object.keys(categories).length; i++) {
        const category = document.createElement('div')
        category.classList.add('category')
        if (i == 0) {
            category.classList.add('category__select')
        }
        category.addEventListener('click', ()=>{
            const content = document.querySelector('.content')
            if(content) {
                const iWannaDelete = content.querySelector('.books')
                content.removeChild(iWannaDelete)
            }
            content.appendChild(renderBooksFromCategory(Object.values(categories)[i]))
        })
        category.innerText = `${Object.keys(categories)[i]}`
        booksCategories.appendChild(category)
    }

    return booksCategories;
}