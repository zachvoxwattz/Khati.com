let soundObject = document.createElement("audio")

const playSound = (soundName) => {
    soundObject.setAttribute('src', './resources/audio/' + soundName + '.mp3')
    soundObject.volume = 0.125
    soundObject.play()
}

const getRandomSound = (str) => {
    return str + Math.floor(Math.random() * 3 + 1)
}