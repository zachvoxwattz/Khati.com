const generateEmoji = (customPreset) => {
    let returnText = ''
    let baseArray = null

    if (!customPreset) { 
        baseArray = defaultPreset
    } else {
        baseArray = processCustomPreset(customPreset)
    }

    for (let ix = 0; ix < NUMBER_OF_LINES * 11; ix++) {
        let randomIndex = Math.floor(Math.random() * baseArray.length)    
        returnText += baseArray[randomIndex]
    }

    return returnText
}

const processCustomPreset = (input) => {
    let splittedArray = input.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
    let returnArray = [];

    for (let ix = 0; ix < splittedArray.length; ix++)
    {
        let char = splittedArray[ix]
        if (char !== "") returnArray.push(char);
    }

    return returnArray;
}