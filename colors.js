const colors = [
	"#34568B",
	"#FF6F61",
	"#6B5B95",
	"#88B04B",
	"#F7CAC9",
	"#92A8D1",
	"#fff0b3",
];

let randomColor = [];

function getRandomColor() {
	randomColor = colors[Math.floor(Math.random() * colors.length)];

	document.body.style.background = randomColor;
}

console.log(randomColor);
