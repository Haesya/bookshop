import {renderCategoriesForm} from "./CategoriesForm.js";
import {renderBooksFromCategory} from "./BooksFromCategory.js";
import {renderLoadMoreForm} from "./LoadMoreForm.js";

export function renderContentForm() {
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:*"&key=AIzaSyAlIeGyOujclVGHf35-htRC99WUBGNh7Ak&printType=books&startIndex=0&maxResults=6&langRestrict=en`

    /*поле для контента с книгами и категориями*/
    const content = document.createElement('div')
    content.classList.add('content')

    /*впихиваем раздел с категориями*/
    content.appendChild(renderCategoriesForm())

    /*впихиваем в контент книги из категории */
    content.appendChild(renderBooksFromCategory(url))

    content.appendChild(renderLoadMoreForm(url))

    return content;
}