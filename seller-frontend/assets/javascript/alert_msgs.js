// Alert message popup
const confPopupBtn = document.querySelector('.confirmation-popup-active')
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

//When the button that should show the confirmation popup is clicked
confPopupBtn.addEventListener('click', function () {
  popUpBg.classList.add('bg-active')
})

//When the cancel button of the popup is clicked
cancelPopupBtn.addEventListener('click', function () {
  popUpBg.classList.remove('bg-active')
})

//When the Save button is clicked
confirmPopupBtn.addEventListener('click', function () {
  successMsg()

  //Two options to close the popup, close button, or timeout where it'll disappear on its own after 3 sec (choose whichever you want)
  cancelPopupBtn.innerHTML = 'Close'
  setTimeout(function () {
    popUpBg.classList.remove('bg-active')
  }, 3000)
})
