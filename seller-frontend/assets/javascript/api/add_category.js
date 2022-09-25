const category = document.querySelector('#category')
const submit_btn = document.querySelector('#add-button')
const user_id = JSON.parse(localStorage.getItem('user')).id
const categories_table = document.querySelector('#table-body')
const addCategory = async (data) => {
  const response = await axios.post(
    'http://localhost/e-commerce/ecommerce-server/api/add_categories.php',
    data
  )
  console.log(response.data)
  if (response.data.status) {
    setTimeout(function () {
      window.location.reload()
    }, 500)
  } else {
    alert(response.data.message)
  }
}
submit_btn.addEventListener('click', () => {
  if (category.value.length > 0) {
    const formData = new FormData()
    formData.append('id', user_id)
    formData.append('category', category.value)
    addCategory(formData)
  } else {
    return
  }
})

const getCategories = async () => {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_categories_by_seller.php?id=' +
      user_id
  )
  const data = response.data

  if (data.status == 1 && data.data != null) {
    categories_table.innerHTML = ''
    for (const category of data.data) {
      const row = `<tr>
        <td>${category.category}</td>
        <td>${category.created_at}</td>
        </tr>`
      categories_table.innerHTML += row
    }
  } else {
    const row = `<tr><td colspan="4">${data.message}</td></tr>`
    clients_table.innerHTML += row
  }
}
getCategories()
