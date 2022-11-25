const CHECKBTN = document.getElementById("check");
const GUESSVAL = document.getElementById("guess");
const RESULT = document.getElementById("result");

let start = false;

let gen = () => {
	let rand = Math.floor(Math.random() * 50);
};

let checkguess = (guess, rand_num) => {
	console.log(rand_num);
};

let checkval = () => {
	let rand = Math.floor(Math.random() * 50);

	if (!start) {
		start = true;
		RESULT.innerText = "What is your lucky guess?";
		GUESSVAL.disabled = false;
		GUESSVAL.focus();
		CHECKBTN.innerText = "Check your guess";
	} else {
		if (GUESSVAL.value == "") {
			RESULT.innerText = "ENTER A VALUE!!";
		} else if (GUESSVAL.value != "") {
			checkguess(GUESSVAL.value, rand);
		}
	}
};

CHECKBTN.addEventListener("click", checkval);
