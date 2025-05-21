import {categories} from "../data/categories.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";

export function renderCategoriesForm (){
    const booksCategories = document.createElement('div')
    booksCategories.classList.add('categories')

    for (let i = 0; i < categories.length; i++) {
        const category = document.createElement('div')
        category.classList.add('category')
        category.addEventListener('click', ()=>{
            renderBooksFromCategory(categories[i])
        })
        category.innerText = categories[i]
        booksCategories.appendChild(category)
    }

    return booksCategories;
}