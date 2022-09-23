// const remove= document.getElementById("remove")
// const tableUsername=document.getElementById("table-username")
const add_button = document.getElementById('add-button')
const popup_element = parent.document
  .querySelector('body')
  .querySelector('.background')
const edit_icons = Array.from(document.getElementsByClassName('fa-pencil'))
const profile_image = parent.document.getElementById('image-element')
const input_fields = parent.document.getElementsByClassName('info-field')
console.log(profile_image)
console.log(input_fields)

// adding event listeners for all edit icons of all table rows
for (const i of edit_icons) {
  i.addEventListener('click', () => {
    const status_message = parent.document.querySelector('.status-message')
    if (status_message) {
      status_message.remove()
    }
    popup_element.style.visibility = 'visible'
    popup_element.querySelector('.other-background').innerText = 'EDIT SELLER'
    parent.document.getElementById('file-input-text').innerText =
      'Edit profile picture'
  })
}

// remove.addEventListener("click",()=>{
//     remove.innerText="Removed"
// })
// tableUsername.addEventListener("click",()=>{
//     window.location.replace("profile.html")
// })

// show popup for seller info and change buttons from edit to add
add_button.addEventListener('click', () => {
  const status_message = parent.document.querySelector('.status-message')
  if (status_message) {
    status_message.remove()
  }
  // clearing old data if it exists
  profile_image.src = '../images/svg/no-profile.svg'
  for (const i of input_fields) {
    i.value = ''
  }

  popup_element.style.visibility = 'visible'
  popup_element.style.position = 'fixed'
  popup_element.style.zIndex = '100'

  console.log(popup_element.style.visibility)
  popup_element.querySelector('.other-background').innerText = 'ADD SELLER'
  parent.document.getElementById('file-input-text').innerText =
    'Add profile picture'
})
