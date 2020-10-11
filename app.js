const colors = ['green', 'purple', 'black', 'white', 'blue', 'red', 'gray', 'yellow']

const $btn = document.getElementById('btn')
const $color = document.querySelector('.color')

$btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    $color.textContent = colors[randomNumber]
    $color.style.color = colors[randomNumber]
})

function getRandomNumber() {
    return parseInt(Math.random() * colors.length)
}