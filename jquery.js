$(document).ready(function () {
	$("button").addClass("animate__animated animate__bounce");
	$("#quote-box-quote").fadeIn("slow");

	// to be improved later on

	$("#new-quote").click(function () {
		$("#quote-box-quote")
			.fadeOut("slow")
			.fadeIn("slow", getRandomColor(), getRandomQuote());
	});

	$("#tweet-quote").attr(
		"href",
		"https://twitter.com/intent/tweet?hashtags=ProgrammingQuotes&related=quotes&text=" +
			encodeURIComponent(
				'"' +
					document.getElementById("text").innerHTML +
					'" ' +
					"\n" +
					document.getElementById("author").innerHTML +
					"\n"
			)
	);
});
