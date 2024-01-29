import "./main.css"

 const validateURL = (url: string) => {
	const regex = new RegExp('^(https?:\\/\\/)?' + // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
	'((\\d{1,3}\\.){3}\\d{1,3}))' +
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
	'(\\?[;&a-z\\d%_.~+=-]*)?' +
	'(\\#[-a-z\\d_]*)?$','i')
	return regex.test(url)
 }


window.onload = () => {
	const menuBtn = document.getElementById("menu-btn")
	const mobileMenu = document.getElementById("mobile-menu")
	const linkInput = document.getElementById("link-input") as HTMLInputElement
	const linkForm = document.getElementById("link-form")
	const errorMsg = document.getElementById("error-msg")

	window.addEventListener("resize", () => {
		if(window.innerWidth > 768){
			mobileMenu!.classList.add("hidden")
			menuBtn!.classList.remove("open")
		}
	}, false)

	menuBtn?.addEventListener("click", () => {
		menuBtn.classList.toggle("open")
		if(menuBtn.classList.contains("open")){
			mobileMenu!.classList.remove("hidden")
		} else {
			mobileMenu!.classList.add("hidden")
		
		}
	}, false)

	linkForm?.addEventListener("submit", (e) => {
		e.preventDefault()
		const link = linkInput.value
		if (!link) {
			errorMsg!.innerHTML = "Please add a link"
			linkInput.classList.add("border-red-500")
		} else if (!validateURL(link)){
				errorMsg!.innerHTML = "Please enter a valid link"
				linkInput.classList.add("border-red-500")
		} else {
			errorMsg!.innerHTML = ""
			linkInput.classList.remove("border-red-500")
		}

	}, false)
	
}