const cardsContainer = document.querySelector('.product_cards_container')
getAllProducts()

async function getSomeProducts(){
    const response = await axios.get('http://localhost/e-commerce/ecommerce-server/api/get_all_products.php')
    const data = response.data.data
    let count = 0
    for(const i of data){
        cardsContainer.appendChild(createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id))
        count ++
        if(count == 8) return data
    }
    return data
}

async function getAllProducts(){
    const response = await axios.get('http://localhost/e-commerce/ecommerce-server/api/get_all_products.php')
    const data = response.data.data
    for(const i of data){
        cardsContainer.appendChild(createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id))
    }
    return data
}

// created an html element containing product information
// adding the id of each product in the card dataset for further utilisation
function createCard(title, description, price, image, id){
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.dataset.id = id
    newCard.addEventListener('click', () =>{
        sessionStorage.setItem('currentProduct', newCard.dataset.id)
        window.location.href = 'single_product.html'
    })

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