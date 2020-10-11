const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const $btn = document.getElementById('btn')
const $color = document.querySelector('.color')

$btn.addEventListener('click', () => {
    let hexColor = getHexCode()

    $color.textContent = hexColor
    $color.style.color = hexColor
    document.body.style.backgroundColor = hexColor
})

function getHexCode() {
    let hexColor = '#'

    for(let i = 0; i < 6; i++) {
        let randomNumber = getRandomNumber()
        hexColor += hex[randomNumber]
    }

    return hexColor
}

function getRandomNumber() {
    return parseInt(Math.random() * hex.length)
}