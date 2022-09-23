async function deleteSeller(id){
    let data = new FormData()
    data.append('id', id)
    const response = await axios.post('http://localhost/e-commerce/ecommerce-server/api/delete_seller.php', data)
    data = response.data
}