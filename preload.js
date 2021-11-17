window.addEventListener('DOMContentLoaded', () => {
	const regenerateButton = document.getElementById("regenerate-btn")
	const genPortText = document.getElementById("gen-port")
	genPortText.innerText = getNoWellknownPort()

	regenerateButton.addEventListener('click', () => { genPortText.innerText = getNoWellknownPort() }, false)

})

function getNoWellknownPort() {
	const min = 49152
	const max = 65535
	return Math.floor(Math.random() * (max - min) + min)
}
