import "./main.css"

window.onload = () => {
	const menuBtn = document.querySelector("#theme-toggle")
	const rootHtml = document.documentElement.classList
	const hasLocalStorage = localStorage.getItem("darkmode") !== null
	const isLocalStorageDark = localStorage.getItem("darkmode") && localStorage.getItem("darkmode") === 'true'
	const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches 

	if(hasLocalStorage) {
		if(isLocalStorageDark) {
			rootHtml.add("dark")
		} else {
			rootHtml.remove("dark")
		}
	} else if(isSystemDark) {
		rootHtml.add("dark")
	}

	menuBtn?.addEventListener("click", () => {
		rootHtml.toggle("dark")
		if(rootHtml.contains("dark")) {
			localStorage.setItem("darkmode", 'true')
		} else {
			localStorage.setItem("darkmode", 'false')
		}
	}, false);
};