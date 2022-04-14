const emojis = ['💓', '❤', '🤗', '❣', '😚', '💝', '💟', '😉', '💞', '🧡', '☺', '💖', '💛', '😍', '😗', '😙', '💗', '💌', '💘', '🥰', '😊', '😘', '💕', '💙', '❤️‍🔥']

var genButtTimeout = null
var copButtTimeout = null

//awesome solution by user Eevee on StackOverFlow: https://stackoverflow.com/a/24071599
function splitEmoji(str) 
{
    split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
    arr = [];
    for (var i = 0; i < split.length; i++)
    {
        char = split[i]
        if (char !== "") arr.push(char);
    }
    return arr;
}

function create(arr)
{
    let returnerEmos = ''
    for (let i = 0; i < 360; i++)
    {
        randomIndex = Math.floor(Math.random() * arr.length)    
        returnerEmos += arr[randomIndex]
    }

    return returnerEmos
}

function generateEmojis()
{
    let customize = document.getElementById('customEmoji').value
    let returnerEmos = ''

    if (customize.length != 0)
    {
        let customizedEmojiArr = splitEmoji(customize)
        returnerEmos = create(customizedEmojiArr)
    }
    
    else returnerEmos = create(emojis)

    document.getElementById('contentArea').value = returnerEmos
    document.getElementById('genButt').textContent = "Don't like it? Have another pile!"

    clearInterval(genButtTimeout)
    genButtTimeout = setInterval(function () { document.getElementById('genButt').textContent = 'Generate Emojis'}, 3000)

    playSound('generate')
}

function copyToClipboard()
{
    let copyContent = document.getElementById('contentArea').value
    navigator.clipboard.writeText(copyContent)

    document.getElementById('copButt').textContent = "Copied to Clipboard!"

    clearInterval(copButtTimeout)
    copButtTimeout = setInterval(function () { document.getElementById('copButt').textContent = 'Jam it to Clipboard'}, 3000)

    playSound('copy')
}

function playSound(name)
{
    let filename = name + '.mp3'
    var audioFile = new Audio('./resources/audio/' + filename)
    audioFile.volume = 0.05
    audioFile.play()
}

function onChangeTest(val)
{
    console.log(val)
    console.log(document.getElementById('customEmoji').value)
}