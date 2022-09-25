const cardsContainer = document.querySelector('.product_cards_container')
const id = JSON.parse(localStorage.getItem('user')).id
getAllFavorites()

async function getAllFavorites() {
    const response = await axios.get(
        'http://localhost/e-commerce/ecommerce-server/api/get_favorites.php?client_id=' +
        id
    )
    console.log(response);
    console.log(response.data);
    const data = response.data.data
    for (const i of data) {
        cardsContainer.appendChild(
            createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id)
        )
    }
    return data
}
