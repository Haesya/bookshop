export function renderHeaderForm() {
    const header = document.createElement('header');
    const headerContent = document.createElement('div')
    headerContent.classList.add('header__content')

    headerContent.innerHTML = `
    <div class="title">Bookshop</div>
    <div class="navbar">
        <ul>
            <li>BOOKS</li>
            <li>AUDIOBOOKS</li>
            <li>STATIONERY & GIFTS</li>
            <li>BLOG</li>
        </ul>
    </div>
    <div class="icons">
        <div class="profile"><img src="/user.svg" alt="user"></div>
        <div class="search"><img src="/search.svg" alt="search"></div>
        <div class="inside__basket">
            <div class="basket"><img src="/basket.svg" alt="basket"></div>
            <div class="purchases">0</div>
        </div>
    </div>
    <div class="burger"><img src="/burger.svg" alt="burgerMenu"></div>
  `;

    header.appendChild(headerContent)

    return header;
}