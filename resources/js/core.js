const clearContents = () => {
    if (contentArea.value == '') {
        playSound('erase_fail')
        return
    }

    contentArea.value = ''
    playSound('erase')
}

const getEmojis = () => {
    let inputSet = emojiCustomField.value.trim()
    let inputLineCount = lineCountCustomField.value.trim()
    let passedArg1, passedArg2

    if (inputSet != '') {
        if (!EmojiRegExPattern.test(inputSet)) {
            alert(INCORRECT_EMOJI_FORMAT_MESSAGE)
            return
        }
        passedArg1 = inputSet
    }
    else passedArg1 = false

    inputLineCount.trim()
    if (inputLineCount != '') {
        if (!LineCountRegExPattern.test(inputLineCount)) {
            alert(INCORRECT_LINECOUNT_FORMAT_MESSAGE)
            return
        }
        passedArg2 = parseInt(inputLineCount)
    }
    else passedArg2 = false

    contentArea.value = generateEmoji(passedArg1, passedArg2)
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