export function buyBookClick(i, flag) {
    const findBook = document.querySelectorAll('.buy__book')
    const buyBook = findBook[i]
    const purchases = document.querySelector('.purchases')
    let count = Number(purchases.innerHTML)
    if (flag === false) {
        purchases.innerHTML = `${count + 1}`
        buyBook.innerHTML = "IN THE CART"
        buyBook.classList.toggle('inTheBasket')

        flag = true
        return flag;
    } else {
        purchases.innerHTML = `${count - 1}`
        buyBook.innerHTML = "BUY NOW"
        buyBook.classList.toggle('inTheBasket')

        flag = false
        return flag;
    }
}