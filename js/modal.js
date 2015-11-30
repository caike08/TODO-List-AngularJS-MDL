/* Fixing bugs:
 *	- Modal isn't closed when pressed enter
 *	- Force modal to close when add button is pressed
*/

$('form').on("keypress", function (e) {
	if (e.which == 13) $(this).submit();
});

$('#add-btn').click(function() {
	console.log("closing modal...");
    location.reload();
});