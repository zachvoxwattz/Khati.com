const playSound = (soundName) => {
    let audioFile = new Audio('./resources/audio/' + soundName + '.mp3')
    audioFile.volume = 0.175
    audioFile.play()
}

const getRandomSound = (str) => {
    return str + Math.floor(Math.random() * 3 + 1)
}