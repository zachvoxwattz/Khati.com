const generateEmoji = (customPreset, customLineCount) => {
    let returnText = ''
    let baseArray = null
    let iterateCount = 0

    customPreset ?
        baseArray = processCustomPreset(customPreset)
        :
        baseArray = defaultPreset

    customLineCount ? 
        iterateCount = customLineCount 
        : 
        iterateCount = DEFAULT_NUMBER_OF_LINES
    
    for (let ix = 0; ix < iterateCount * 11; ix++) {
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