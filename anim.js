

const randomInRange = (min, max) =>
	Math.floor(
		Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
	)

Splitting()

ScrollOut({
	targets: ['.word', '.falling', '.scrolled', '.glare', '.stream'],
})

// Set of characters we can use to glitch through
const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')
// Loop through our Splitting results and apply CSS variables.
// The results contain an Array of spans that are the characters.
const CHARS = document.querySelectorAll('.glitchy .char')
for (let c = 0; c < CHARS.length; c++) {
  // We are going to inline 10 CSS variables
  for (let g = 0; g < 10; g++) {
    CHARS[c].style.setProperty(
      `--char-${g}`,
      `"${GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}"`
    )
  }
}

// Assign random position for random chars
const RANDOM_CHARS = document.querySelectorAll('.random .char')
RANDOM_CHARS.forEach((char) => {
	char.style.setProperty('--x', randomInRange(-1000, 1000))
	char.style.setProperty('--y', randomInRange(-1000, 1000))
})

// Assign indexes to "Expanding"
const EXPANDING_WORDS = document.querySelectorAll('.expanding .word')
EXPANDING_WORDS.forEach((word, index) => {
	const exp = (index % 2) + 1
	if (index !== 0) {
		word.style.setProperty('--expansion-position', index > 2.5 ? exp : exp * -1)
		word.style.setProperty('--expansion-index', exp)
	}
})


