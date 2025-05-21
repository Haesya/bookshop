import {loadMoreBooks} from "./LoadMoreBooks.js";

export function renderLoadMoreForm (url){
    const loadMore = document.createElement('button')
    loadMore.classList.add('load__more')
    loadMore.innerText = "LOAD MORE"
    loadMore.addEventListener("click", () => {
        loadMoreBooks(url)
    })

    return loadMore;
}