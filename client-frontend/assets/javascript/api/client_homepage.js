const cardsContainer = document.querySelector('.product_cards_container')
const id = JSON.parse(localStorage.getItem('user')).id
const search = document.getElementById('search')
getAllProducts()

search.addEventListener('blur', (e) => {
  e.preventDefault()
  const searchText = search.value
  cardsContainer.innerHTML = ''
  if (searchText) {
    getSearchResults(searchText)
  } else {
    getAllProducts()
  }
})

async function getSearchResults(search) {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/search_product.php?search_text=' +
      search
  )
  const data = response.data.data
  if (response.data.status && response.data.data) {
    for (const i of data) {
      cardsContainer.appendChild(
        createCard(i.title, i.description, i.price, i.image, i.id)
      )
    }
  } else {
    cardsContainer.innerHTML = `<h4>${response.data.message}</h4>`
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
      createCard(i.title, i.description, i.price, i.image, i.id)
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
      createCard(i.title, i.description, i.price, i.image, i.id)
    )
  }
  return data
}

getAllProducts()
