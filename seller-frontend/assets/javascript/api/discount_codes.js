const discounts_table = document.querySelector('#table-body')
const user_id = JSON.parse(localStorage.getItem('user')).id
const get_discounts_api =
  'http://localhost/e-commerce/ecommerce-server/api/get_discounts.php?id=' +
  user_id
const getDiscounts = async () => {
  const response = await axios.get(get_discounts_api)
  const data = response.data
  console.log(response.data)
  if (data.status == 1 && data.data != null) {
    // console.log(data)
    discounts_table.innerHTML = ''
    for (const product of data.data) {
      const row = `<tr>
        <td>${product.code}</td>
        <td>${product.percentage}</td>
        <td>${TDate() ? 'expired' : product.expired_at}</td>        
        </tr>`
      discounts_table.innerHTML += row
    }
  } else {
    const row = `<tr><td colspan="3">${data.message}</td></tr>`
    discounts_table.innerHTML += row
  }
}
getDiscounts()

function TDate(date) {
  if (date < Date.now()) {
    return true
  }
  if (date >= Date.now()) {
    return false
  }
}
