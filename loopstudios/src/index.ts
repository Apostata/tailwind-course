import "./main.css"

window.onload = () => {
	const menuBtn = document.querySelector("#menu-btn")
	const menu = document.querySelector("#menu-mobile")
	menuBtn?.addEventListener("click", () => {
		menuBtn.classList.toggle("open")
		menu?.classList.toggle("open")
	}, false)

}