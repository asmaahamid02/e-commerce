async function getProducts(){
    const response = await axios.get('http://localhost/e-commerce/ecommerce-server/api/get_all_products.php')
    const data = response.data
    console.log(data)
}

getProducts()