const defaultPreset = ['😙', '💋', '💋', '🫶🏻', '❤️‍🔥', '😍', '🩵', '💙', '💙', '🩷', '🩷', '💙', '💌', '💌', '🧡', '🧡', '💛', '🩵', '💛', '💜', '❤', '❤', '💜', '💜', '🤗', '💝', '🩵', '💕', '💙', '💞', '💓', '💓', '💌', '💘', '💘', '🥰', '❤️‍🔥', '❤️‍🔥', '🫰🏻', '💖', '🩵', '🩵', '💟', '💟', '☺', '☺', '💌', '💌', '🧡', '🤗', '🤗', '😗', '💟', '😚', '😉', '😘', '💙', '💙', '💗', '😊', '💋', '💋', '❤️‍🔥', '🫶🏻', '🫰🏻', '❤', '❤', '🩷', '🩷']

// Randomly retrieve between 30 and 33 rows.
const MAX_COUNT = 33
const MIN_COUNT = 30
const getRandomCount = () => {
    return Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1) + MIN_COUNT)
}

const generateButtonDefaultLabel = 'Gimme a pile of Emojis!'
const copyButtonDefaultLabel = "Jam em' to the Clipboard"
const labelCooldownDuration = 3 // in seconds!
const LegacyEmojiRegExPattern = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|[\u00a9-\u00ae]|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+$/
const UniversalEmojiRegExPattern = /^[\p{Emoji}]+$/u
const LineCountRegExPattern = /^([1-9][0-9]{0,1})$/
const INCORRECT_EMOJI_FORMAT_MESSAGE = 'Only emojis are allowed! Remove other characters and try again!'
const INCORRECT_LINECOUNT_FORMAT_MESSAGE = 'Invalid line count! It should be between 0 and 100!'

var displayBox = document.getElementById('app_display_box')
var emojiInputField = document.getElementById('app_customize_emoji_input_box')
var lineCountInputField = document.getElementById('app_customize_linecount_input_box')

var generateButton = document.getElementById('app_customize_generate_button')
var copyButton = document.getElementById('app_customize_copy_button')
var clearButton = document.getElementById('app_clear_button')

var generateButtonLabelTimer = null
var copyButtonLabelTimer = null
