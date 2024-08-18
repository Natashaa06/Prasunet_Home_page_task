window.addEventListener("scroll", () => {
	const scrolled = window.scrollY;
	var nav = document.getElementById("nav");
	console.log(scrolled);
	if (scrolled >= (window.innerHeight/100) * 20) {
		nav.classList.add("color-grey");
		nav.classList.remove("color-transparent");
	} else {
		nav.classList.remove("color-grey");
		nav.classList.add("color-transparent");
	} ;
});