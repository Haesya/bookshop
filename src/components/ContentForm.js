import {renderCategoriesForm} from "./CategoriesForm.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";

export function renderContentForm() {
    /*поле для контента с книгами и категориями*/
    const content = document.createElement('div')
    content.classList.add('content')

    /*впихиваем раздел с категориями*/
    content.appendChild(renderCategoriesForm())

    /*впихиваем в контент книги из первой категории*/
    content.appendChild(renderBooksFromCategory())

    return content;
}