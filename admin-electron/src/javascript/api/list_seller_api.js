const sellers_table = document.querySelector('#table-body')
const edit_popup = document.querySelector('#edit-popup')
const get_sellers_api =
  'http://localhost/e-commerce/ecommerce-server/api/get_sellers.php'
const delete_seller_api =
  'http://localhost/e-commerce/ecommerce-server/api/delete_seller.php?id='

const config = {}

const resetForm = (parent, id) => {
  const status_message = parent.querySelector('.status-message')
  const profile_image = parent.querySelector('.profile-picture')
  const input_fields = parent.querySelectorAll('.info-field')
  if (status_message) {
    status_message.remove()
  }
  // clearing old data if it exists
  profile_image.src = '../images/svg/no-profile.svg'
  for (const i of input_fields) {
    i.value = ''
  }
  parent.dataset.id = id
  parent.style.display = 'block'
}
async function deleteSeller(id) {
  const response = await axios.get(delete_seller_api + id).then(
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

const getSellers = async () => {
  const response = await axios.get(get_sellers_api)
  const data = response.data
  console.log(response.data)
  if (data.status == 1 && data.data != null) {
    // console.log(data)
    sellers_table.innerHTML = ''
    for (const seller of data.data) {
      const row = `<tr>
      <td>${seller.seller_name}</td>
      <td>${seller.seller_username}</td>
      <td class="actions">                       
          <a href="javascript:void(0);" class="edit-icon" data-action="edit" data-id = "${seller.seller_id}"><img src='../images/svg/edit-svgrepo-com.svg'></a>
          <a href="javascript:void(0);" class="delete-icon" data-action="delete" data-id = "${seller.seller_id}"><img src='../images/svg/delete-svgrepo-com.svg'></a>
      </td>
      </tr>`
      sellers_table.innerHTML += row
    }
    const edit_icons = document.querySelectorAll('.actions > .edit-icon')
    const delete_icons = document.querySelectorAll('.actions > .delete-icon')

    edit_icons.forEach((editicon) => {
      editicon.addEventListener('click', () => {
        // console.log(icon)
        resetForm(edit_popup, editicon.dataset.id)
      })
    })

    delete_icons.forEach((deleteicon) => {
      deleteicon.addEventListener('click', () => {
        // console.log(icon)
        if (triggerAlert()) {
          confirmPopupBtn.addEventListener('click', function () {
            deleteSeller(deleteicon.dataset.id)
          })
          cancelPopupBtn.addEventListener('click', function () {
            return
          })
        }
      })
    })
  } else {
  }
}
getSellers()
