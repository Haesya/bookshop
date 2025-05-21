import {renderCategoriesForm} from "./CategoriesForm.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";
import {renderLoadMoreForm} from "./LoadMoreForm.js";

export function renderContentForm() {

    /*поле для контента с книгами и категориями*/
    const content = document.createElement('div')
    content.classList.add('content')

    /*впихиваем раздел с категориями*/
    content.appendChild(renderCategoriesForm())

    /*впихиваем в контент книги из категории */
    content.appendChild(renderBooksFromCategory())

    /*и кнопку для загрузки бОльшего количества книг*/
    content.appendChild(renderLoadMoreForm())

    return content;
}