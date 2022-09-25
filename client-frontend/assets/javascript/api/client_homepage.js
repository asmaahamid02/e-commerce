const cardsContainer = document.querySelector('.product_cards_container')

async function getProducts(){
    const response = await axios.get('http://localhost/e-commerce/ecommerce-server/api/get_all_products.php')
    const data = response.data
    console.log(data)
}

function createCard(title, description, price, image){
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    let newElement = document.createElement('img')
    newElement.src = 'assets/images/products/' + image
    newCard.appendChild(newElement)

    newElement = document.createElement('h3')
    newElement.innerText = title
    newCard.appendChild(newElement)

    newElement = document.createElement('p')
    newElement.classList.add('description')
    newElement.innerText = description
    newCard.appendChild(newElement)

    newElement = document.createElement('div')
    newElement.classList.add('price_and_heart')
    newElement.innerHTML = '<h6>$<span class="product_price">' + price + '</span></h6><i class="fa-regular fa-heart green"></i>'
    newCard.appendChild(newElement)

    newElement = document.createElement('button')
    newElement.classList.add('buy')
    newElement.innerText = 'Buy now'
    newCard.appendChild(newElement)

    return newCard
}

cardsContainer.appendChild(createCard('title', 'description', 2000, 'dummy_product_pic.jpg'))