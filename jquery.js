$(document).ready(function () {
	$("button").addClass("animate__animated animate__bounce");
	$("#quote-box-quote").fadeIn("slow");

	// to be improved later on

	/*$("#new-quote").click(function fadeOut() {
		$("#quote-box-quote").fadeOut("slow");
	});
	$("#new-quote").click(function fadeIn() {
		$("#quote-box-quote").fadeIn("slow");
	});
    */

	$("#tweet-quote").attr(
		"href",
		"https://twitter.com/intent/tweet?hashtags=ProgrammingQuotes&related=quotes&text=" +
			encodeURIComponent(
				'"' +
					randomQuote +
					'" ' +
					"\n" +
					"- " +
					randomQuoteAuthor +
					"\n"
			)
	);
});
