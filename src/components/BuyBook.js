export function buyBookClick(flag, childrenBooks, id, bookInfoForStorage) {
    const findBook = document.querySelectorAll('.buy__book')
    const buyBook = findBook[childrenBooks]
    const purchases = document.querySelector('.purchases')
    let count = Number(purchases.innerHTML)

    if (flag === false) {
        count++
        purchases.innerHTML = `${count}`
        buyBook.innerHTML = "IN THE CART"
        buyBook.classList.toggle('inTheBasket')
        localStorage.setItem(id, bookInfoForStorage)
        localStorage.setItem('countPurchases', count)

        flag = true
        return flag;
    } else {
        count--
        purchases.innerHTML = `${count}`
        buyBook.innerHTML = "BUY NOW"
        buyBook.classList.toggle('inTheBasket')
        localStorage.setItem('countPurchases', count)
        localStorage.removeItem(id)

        flag = false
        return flag;
    }
}