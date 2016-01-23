
function updateContent(hash) {
	var newClass = hash.substring(1);
	var newContent = $("."+newClass).html();
	$('#content').html(newContent);
}

if (window.location.hash) {
	updateContent(window.location.hash);
};

$('.contentUpdate').click(function() {
	updateContent($(this).attr("href"));
});