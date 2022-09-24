const products_table = document.querySelector('#table-body')
const edit_popup = document.querySelector('#edit-popup')
const user_id = JSON.parse(localStorage.getItem('user')).id
const get_products_api =
  'http://localhost/e-commerce/ecommerce-server/api/get_products.php?id='
const delete_product_api =
  'http://localhost/e-commerce/ecommerce-server/api/delete_product.php?id='
const get_product_api =
  'http://localhost/e-commerce/ecommerce-server/api/get_product_info.php?id='

const config = {}

//open modal
const resetForm = (parent, id) => {
  const status_message = parent.querySelector('.status-message')
  const profile_image = parent.querySelector('.profile-picture')
  const input_fields = parent.querySelectorAll('.info-field')
  if (status_message) {
    status_message.remove()
  }
  // clearing old data if it exists
  // profile_image.src = '../images/svg/no-profile.svg'
  // for (const i of input_fields) {
  //   i.value = ''
  // }
  parent.dataset.id = id
  parent.style.display = 'block'
}

//delete seller
async function deleteProduct(id) {
  const response = await axios.get(delete_product_api + id).then(
    (response) => {
      console.log(response.data)
      if (response.data.status) {
        //success
        displaySuccessMsg(response.data.message)
      } else {
        //error
        displayErrorMsg(response.data.message)
        return
      }
    },
    (error) => {
      console.log(error)
    }
  )
}

//get user data
async function getProduct(id) {
  await axios.get(get_product_api + id).then(
    (response) => {
      console.log(response.data)
      if (response.data.status) {
        //success
        console.log(response.data.data[0])
        edit_input_username.value = response.data.data[0].username
        edit_input_email.value = response.data.data[0].email
        edit_input_name.value = response.data.data[0].name

        console.log(response.data.data[0].profile_picture)
        if (response.data.data[0].profile_picture) {
          console.log(edit_popup.querySelector('#edit-image-element').src)
          edit_popup.querySelector(
            '#edit-image-element'
          ).src = `../../src/images/sellers-profiles/${response.data.data[0].profile_picture}`
          console.log(edit_popup.querySelector('#edit-image-element').src)
        }
        resetForm(edit_popup, id)
      } else {
        //error
      }
    },
    (error) => {
      console.log(error)
    }
  )
}

const getProducts = async () => {
  const response = await axios.get(get_products_api + user_id)
  const data = response.data
  console.log(response.data)
  if (data.status == 1 && data.data != null) {
    // console.log(data)
    products_table.innerHTML = ''
    for (const product of data.data) {
      const row = `<tr>
      <td>${product.title}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.views}</td>
      <td class="actions">                       
          <a href="javascript:void(0);" class="edit-icon" data-action="edit" data-id = "${product.id}"><img src='../../../admin-electron/src/images/svg/edit-svgrepo-com.svg'></a>
          <a href="javascript:void(0);" class="delete-icon" data-action="delete" data-id = "${product.id}"><img src='../../../admin-electron/src/images/svg/delete-svgrepo-com.svg'></a>
      </td>
      </tr>`
      products_table.innerHTML += row
    }
    const edit_icons = document.querySelectorAll('.actions > .edit-icon')
    const delete_icons = document.querySelectorAll('.actions > .delete-icon')

    edit_icons.forEach((editicon) => {
      editicon.addEventListener('click', () => {
        // console.log(icon)
        getProduct(editicon.dataset.id)
      })
    })

    delete_icons.forEach((deleteicon) => {
      deleteicon.addEventListener('click', () => {
        // console.log(icon)
        if (triggerAlert('Are you sure you want to delete this user?')) {
          confirmPopupBtn.addEventListener('click', function () {
            deleteProduct(deleteicon.dataset.id)
          })
          cancelPopupBtn.addEventListener('click', function () {
            return
          })
        }
      })
    })
  } else {
    const row = `<tr><td colspan="4">${data.message}</td></tr>`
    clients_table.innerHTML += row
  }
}
getProducts()
