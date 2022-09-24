// Alert message popup
// const confPopupBtn = document.querySelector('.confirmation-popup-active')
const popUpBg = document.querySelector('.confirmation-popup-container')
const cancelPopupBtn = document.getElementById('cancel-conf-popup')
const confirmPopupBtn = document.getElementById('confirm-conf-popup')
const description_conf_popup = document.querySelector(
  '.confirmation_alert_description'
)

//Success message div
const successMsg = () => {
  let success_msg_html = `            
    <div class="sucess-msg-div">
    <img class="success" src="./assets/images/green_check_mark.png">
    <p class="success_msg">Sucess</p>
    </div> `
  description_conf_popup.innerHTML = success_msg_html
}

const confirmation = (button) => {
  let confirm = false
  button.addEventListener('click', function () {
    if (button == confirmPopupBtn) {
      confirm = true
    } else {
      confirm = false
    }
  })
  return confirm
}
const triggerAlert = () => {
  popUpBg.classList.add('bg-active')
  return true
}
