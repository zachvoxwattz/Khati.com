const defaultPreset = ['😙', '🫶🏻', '❤️‍🔥', '😍', '❣', '💙', '💙', '💌', '🧡', '🧡', '💛', '💛', '❤', '❤', '💜', '💝', '💕', '💙', '💞', '💓', '💘', '🥰', '❤️‍🔥', '🫰🏻', '💖', '💟', '☺', '💌', '🧡', '🤗', '😗', '💟', '😚', '😉', '😘', '💙', '💗', '😊', '💋', '❤️‍🔥', '🫶🏻', '🫰🏻', '❤']

const DEFAULT_NUMBER_OF_LINES = 30
const generateButtonDefaultLabel = 'Gimme a pile of Emojis!'
const copyButtonDefaultLabel = "Jam em' to the Clipboard"
const labelCooldownDuration = 3 // in seconds!
const EmojiRegExPattern = /^(?:[\d,\/().]*[a-zA-Z][a-zA-Z\d,\/().]*)?$/
const LineCountRegExPattern = /^([1-9][0-9]{0,1})$/
const INCORRECT_EMOJI_FORMAT_MESSAGE = 'Alphanumeric, Special Characters detected! Please remove them and try again!'
const INCORRECT_LINECOUNT_FORMAT_MESSAGE = 'Invalid number for line count detected! Please input an Integer without a starting 0 and it should not be larger than 99!'

var contentArea = document.getElementById('appContentArea')
var emojiCustomField = document.getElementById('appEmojiCustomizationField')
var lineCountCustomField = document.getElementById('appLineCountCustomizationField')

var generateButton = document.getElementById('generateButton')
var copyButton = document.getElementById('copyButton')

var generateButtonLabelTimer = null
var copyButtonLabelTimer = null