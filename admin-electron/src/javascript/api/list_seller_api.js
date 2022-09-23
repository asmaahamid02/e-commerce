const sellers_table = document.querySelector('#table-body')
const api = 'http://localhost/e-commerce/ecommerce-server/api/get_sellers.php'

axios
  .get(api)
  .then((response) => {
    console.log(response.data)

    const sellers = response.data.data

    sellers.forEach((seller) => {
      const row = `<tr data-sellerId = "${seller.seller_id}">
                   <td>${seller.seller_name}</td>
                   <td>${seller.seller_username}</td>
                   <td colspan="3" class="actions">
                       <a href="#" class="profile-icon"><img src='../images/svg/profile-svgrepo-com.svg'></a>
                       <a href="#" class="edit-icon"><img src='../images/svg/edit-svgrepo-com.svg'></a>
                       <a href="#" class="delete-icon"><img src='../images/svg/delete-svgrepo-com.svg'></a>
                   </td>
                   </tr>`
      sellers_table.innerHTML += row
    })
  })
  .catch((error) => console.log(error))
