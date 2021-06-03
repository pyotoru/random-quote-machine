const quotes = [
	{
		quote: "Programming isn't about what you know; it's about what you can figure out.",
		author: "Chris Pine",
	},
	{
		quote: "The only way to learn a new programming language is by writing programs in it.",
		author: "Dennis Ritchie",
	},
	{
		quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
		author: "Joyce Wheeler",
	},
	{
		quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
		author: "Andrew Hunt",
	},
	{
		quote: "Testing leads to failure, and failure leads to understanding.",
		author: "Burt Rutan",
	},
	{
		quote: "The best error message is the one that never shows up.",
		author: "Thomas Fuchs",
	},
	{
		quote: "The most damaging phrase in the language is.. it's always been done this way",
		author: "Grace Hopper",
	},

	{
		quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		author: "Martin Fowler",
	},

	{
		quote: "First, solve the problem. Then, write the code.",
		author: "John Johnson",
	},

	{
		quote: "Experience is the name everyone gives to their mistakes.",
		author: "Oscar Wilde",
	},

	{
		quote: "In order to be irreplaceable, one must always be different",
		author: "Coco Chanel",
	},

	{
		quote: "Java is to JavaScript what car is to Carpet.",
		author: "Chris Heilmann",
	},

	{
		quote: "Knowledge is power.",
		author: "Francis Bacon",
	},

	{
		quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
		author: "Dan Salomon",
	},

	{
		quote: "Code is like humor. When you have to explain it, it’s bad.",
		author: "Cory House",
	},
];
var currentQuote = "";
let currentAuthor = "";
function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}
function getQuote() {
	let randomQuote = getRandomQuote();

	currentQuote = randomQuote.quote;
	currentAuthor = randomQuote.author;

	document.getElementById("text").innerHTML = randomQuote.quote;

	document.getElementById("author").innerHTML = "- " + randomQuote.author;
	$("#tweet-quote").attr(
		"href",
		"https://twitter.com/intent/tweet?hashtags=ProgrammingQuotes&related=quotes&text=" +
			encodeURIComponent(
				'"' + currentQuote + '" ' + "\n" + currentAuthor + "\n"
			)
	);
}

function deleteRandomQuote() {
	document.getElementById("text").innerHTML = [];
	document.getElementById("author").innerHTML = [];
}
console.log(getRandomQuote);
