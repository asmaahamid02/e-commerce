const currentId = sessionStorage.getItem('currentProduct')
getProductInfo(currentId)

async function getProductInfo(id) {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_product_byid.php?id=' +
      id
  )
  const data = response.data.data[0]
  createProduct(data.title, data.price, data.name, data.description, data.image)
}

function createProduct(title, price, seller, description, image) {
  const productContainer = document.querySelector('.single-product')
  const left = document.createElement('div')
  left.classList.add('left-single-product')

  let newElement = document.createElement('h1')
  newElement.innerText = title
  left.appendChild(newElement)
  newElement = document.createElement('h2')
  newElement.innerText = 'Price: ' + price + '$'
  left.appendChild(newElement)

  newElement = document.createElement('div')
  newElement.classList.add('single-product-page-seller')
  newElement.innerHTML = '<p>By ' + seller + '</p>'
  left.appendChild(newElement)

  if (description) {
    newElement = document.createElement('div')
    newElement.classList.add('single-product-page-desc')
    newElement.innerHTML = '<p>' + description + '</p>'
    left.appendChild(newElement)
  }

  newElement = document.createElement('div')
  newElement.classList.add('single-product-page-btns')
  newElement.innerHTML =
    '<button class="single-product-btn green-back">Add to cart</button>' +
    '<button class="single-product-btn white-back">Add to favorites</button>'
  left.appendChild(newElement)
  productContainer.appendChild(left)

  newElement = document.createElement('div')
  newElement.classList.add('single-product-page-img')
  newElement.innerHTML =
    '<img src="../seller-frontend/assets/images/products/' + image + '">'

  productContainer.appendChild(newElement)
}
