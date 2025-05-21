
export function renderLoadMore () {
    const loadMore = document.createElement('button')
    loadMore.classList.add('load__more')
    loadMore.innerText = "LOAD MORE"

    return loadMore;
}