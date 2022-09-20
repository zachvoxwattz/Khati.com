const clearContents = () => {
    if (contentArea.value == '') {
        playSound('erase_fail')
        return
    }

    contentArea.value = ''
    playSound('erase')
}

const getEmojis = () => {
    if (customizeField.value != '') {
        if (RegExPattern.test(customizeField.value)) {
            alert(INCORRECT_FORMAT_MESSAGE)
            return
        }
        contentArea.value = generateEmoji(customizeField.value)
    } else {
        contentArea.value = generateEmoji()
    }
    generateButton.textContent = "Don't like it? Have another pile!"

    clearInterval(generateButtonLabelTimer)
    generateButtonLabelTimer = setInterval(() => { generateButton.textContent = generateButtonDefaultLabel }, labelCooldownDuration * 1000)

    playSound('generate')
}

const toClipboard = () => {
    if (contentArea.value == '') {
        playSound(getRandomSound('copy_fail'))
        return
    }

    navigator.clipboard.writeText(contentArea.value)
    copyButton.textContent = "Jammed to Clipboard!"
    
    clearInterval(copyButtonLabelTimer)
    copyButtonLabelTimer = setInterval(() => { copyButton.textContent = copyButtonDefaultLabel }, labelCooldownDuration * 1000)
    
    playSound(getRandomSound('copy'))
}