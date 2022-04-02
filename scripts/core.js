const emojis = ['💓', '❤', '🤗', '❣', '😚', '💝', '💟', '😉', '💞', '🧡', '☺', '💖', '💛', '😍', '😗', '😙', '💗', '💌', '💘', '🥰', '😊', '😘', '💕', '💙', '❤️‍🔥']

var genButtTimeout = null
var copButtTimeout = null

function generateEmojis()
{
    let returnerEmos = ''
    let randomIndex = 0

    for (let i = 0; i < 360; i++)
    {
        randomIndex = Math.floor(Math.random() * emojis.length)    
        returnerEmos += emojis[randomIndex]
    }

    document.getElementById('contentArea').textContent = returnerEmos
    document.getElementById('genButt').textContent = "Don't like it? Have another pile!"

    clearInterval(genButtTimeout)
    genButtTimeout = setInterval(function () { document.getElementById('genButt').textContent = 'Generate Emojis'}, 3000)

    playSound('generate')
}

function copyToClipboard()
{
    let copyContent = document.getElementById('contentArea').textContent
    navigator.clipboard.writeText(copyContent)

    document.getElementById('copButt').textContent = "Copied to clipboard!"

    clearInterval(copButtTimeout)
    copButtTimeout = setInterval(function () { document.getElementById('copButt').textContent = 'Jam it to Clipboard'}, 3000)

    playSound('copy')
}

function playSound(name)
{
    let filename = name + '.mp3'
    var audioFile = new Audio('./resources/audio/' + filename)
    audioFile.volume = 0.2
    audioFile.play()
}