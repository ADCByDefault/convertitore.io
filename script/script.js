const euroInput = document.querySelector("#euroInput");
const dollarp = document.querySelector("#USAResult");
const poundp = document.querySelector("#UKResult");
const yenp = document.querySelector("#japResult");
const body = document.querySelector("body");
const mode = document.querySelector("#modeIcon");

let dollar = 0.99;
let pound = 0.87;
let yen = 146.82;
let t;

euroInput.addEventListener("input", () => {
	updateValue();
});

function updateValue() {
	t = parseFloat(euroInput.value);
	if (isFinite(t) && !isNaN(t) && t >= 0) {
		dollarp.innerText = (dollar * t).toFixed(2);
		poundp.innerText = (pound * t).toFixed(2);
		yenp.innerText = (yen * t).toFixed(2);
	} else {
		dollarp.innerText = "...";
		poundp.innerText = "...";
		yenp.innerText = "...";
	}
}

mode.addEventListener("click", () => {
	body.classList.toggle("dark");
	if (body.classList.contains("dark")) {
		mode.innerHTML = `<i class="bi bi-sun-fill"></i>`;
		return;
	}
	mode.innerHTML = `<i class="bi bi-moon-fill"></i>`;
});
