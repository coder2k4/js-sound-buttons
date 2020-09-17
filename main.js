const sounds = [
    "fusro",
    "meme",
    "quack",
    "vine",
    "sparta",
    "tuturu",
]


sounds.forEach((value, index, array) => {

    const $btn = document.createElement('button')
    $btn.classList.add('btn')
    $btn.innerText = value
    document.body.appendChild($btn)

    $btn.addEventListener('click', () => {
        stopAllSound()

        const $sound = document.getElementById(value)
        $sound.play()
    })

})


const stopAllSound = () => {
    sounds.forEach((value, index, array) => {
        const $sound = document.getElementById(value)
        $sound.pause()
        $sound.currentTime = 0
    })
}
