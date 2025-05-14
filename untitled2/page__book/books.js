const categories = ['Architecture',
    'Art & Fashion',
    'Biography',
    'Business',
    'Crafts & Hobbies',
    'Drama',
    'Fiction',
    'Food & Drink',
    'Health & Wellbeing',
    'History & Politics',
    'Humor',
    'Poetry',
    'Psychology',
    'Science',
    'Technology',
    'Travel & Maps']

const categoriesUl = document.querySelector('.categories')

for (let i = 0; i < categories.length; i++) {
    const category = document.createElement('div')
    category.classList.add('category')
    category.innerText = categories[i]
    categoriesUl.appendChild(category)
}

categoriesUl.firstElementChild.classList.add('category__select')

const url = "https://www.googleapis.com/books/v1/volumes?q=\"subject:Business\"&key=AIzaSyAlIeGyOujclVGHf35-htRC99WUBGNh7Ak&printType=books&startIndex=0&maxResults=6&langRestrict=en"

fetch(url).then((response) => response.json())
