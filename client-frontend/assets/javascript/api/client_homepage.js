const cardsContainer = document.querySelector('.product_cards_container')
const id = JSON.parse(localStorage.getItem('user')).id
const search = document.getElementById('search')
getAllProducts()

search.addEventListener('blur', () =>{
    const searchText = search.value
    cardsContainer.innerHTML = ''
    if(searchText){
        getSearchResults(searchText)
    }else{
        getAllProducts()
    }
})

async function getSearchResults(search){
    const response = await axios.get('http://localhost/e-commerce/ecommerce-server/api/search_product.php?search_text=' + search)
    const data = response.data.data
    for(const i of data){
        cardsContainer.appendChild(createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id))
    }
}

async function getSomeProducts() {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_all_products.php?id=' +
      id
  )
  const data = response.data.data
  let count = 0
  for (const i of data) {
    cardsContainer.appendChild(
      createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id)
    )
    count++
    if (count == 8) return data
  }
  return data
}

async function getAllProducts() {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_all_products.php?id=' +
      id
  )
  const data = response.data.data
  for (const i of data) {
    cardsContainer.appendChild(
      createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id)
    )
  }
  return data
}