const table = document.querySelector(".table")
getClients()

function addRow(name, username, profile_picture, is_banned){
    const row = document.createElement("tr")
    // adding name to the first table data
    let attribute = document.createElement("td")
    attribute.textContent = name
    row.appendChild(attribute)

    // adding username to the second table data
    attribute = document.createElement("td")
    attribute.textContent = "@" + username
    row.appendChild(attribute)

    // adding if user is banned information
    attribute = document.createElement("td")
    const ban = document.createElement("a")
    ban.classList.add("delete-icon")
    const ban_icon = document.createElement("img")
    ban_icon.src = "../images/svg/ban-svgrepo-com.svg"
    ban_icon.style.cursor = "pointer"
    // ban_icon.classList.add("ban-icons")
    ban.appendChild(ban_icon)
    attribute.appendChild(ban)
    row.appendChild(attribute)

    return row
}

async function getClients(){
    const response = await axios.get("http://localhost/e-commerce/ecommerce-server/api/get_clients.php")
    const data = response.data
    console.log(data)
    for(const i of data){
        table.appendChild(addRow(i.client_name, i.client_username, i.client_pp, i.client_banned_status))
    }
}