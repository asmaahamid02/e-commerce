const table = document.querySelector(".sellers-table")
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

    // adding profile picture if it exisits
    attribute = document.createElement("td")
    const profile = document.createElement("img")
    if(profile_picture){
        profile.src = profile_picture
    }else{
        profile.src = "../images/svg/profile-svgrepo-com.svg"
    }
    attribute.appendChild(profile)
    row.appendChild(attribute)

    // adding edit icon
    attribute = document.createElement("td")
    let icon = document.createElement("i")
    icon.classList.add("fa")
    icon.classList.add("fa-pencil")
    attribute.appendChild(icon)
    row.appendChild(attribute)

    // adding if user is banned information
    attribute = document.createElement("td")
    attribute.textContent = is_banned ? "Unban Client" : "Ban Client"
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