const input_image = document.getElementById('image')

input_image.onchange = function() {
    const reader = new FileReader()
    reader.onload = () => {
        console.log('inside function')
        const image = reader.result
        document.getElementById('image-element').src = image
    }
    console.log(reader.files)
    reader.readAsDataURL(this.files[0])
}