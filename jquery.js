$(document).ready(function () {
	$("button").addClass("animate__animated animate__bounce");
	$("#quote-box-quote").fadeIn("slow");

	$("#new-quote").click(function () {
		$("#quote-box-quote")
			.fadeOut("slow", () => getQuote())
			.fadeIn("slow", getRandomColor());
	});
});
