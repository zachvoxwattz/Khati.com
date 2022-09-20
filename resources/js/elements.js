const defaultPreset = ['😙', '😍', '❣', '💙', '🧡', '💛', '❤', '💜', '💝', '💕', '💞', '💓', '💘', '🥰', '💖', '💟', '☺', '💌', '🤗', '😗', '😚', '😉', '😘', '💗', '😊', '💋', '❤🔥']

const NUMBER_OF_LINES = 32
const generateButtonDefaultLabel = 'Gimme a pile of Emojis!'
const copyButtonDefaultLabel = "Jam em' to the Clipboard"
const labelCooldownDuration = 3 // in seconds!
const RegExPattern = /^(?:[\d,\/().]*[a-zA-Z][a-zA-Z\d,\/().]*)?$/
const INCORRECT_FORMAT_MESSAGE = 'Alphanumeric, Special Characters detected! Please remove them and try again!'

var contentArea = document.getElementById('appContentArea')
var customizeField = document.getElementById('appCustomizationField')

var generateButton = document.getElementById('generateButton')
var copyButton = document.getElementById('copyButton')

var generateButtonLabelTimer = null
var copyButtonLabelTimer = null