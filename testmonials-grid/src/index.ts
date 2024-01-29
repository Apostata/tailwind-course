import "./main.css"

window.onload = () => {
	const readMore = document.querySelector("#readMore");
	readMore?.addEventListener("click", () => {
		readMore.previousElementSibling?.classList.toggle("md:line-clamp-6");
	}, false)
}