$('#submit').on('click',function(e){
	var $textVal = $('#textVal').val();
	var $listItems = $('.listItems');
    var dateAdded = new Date();

	$listItems.prepend('<li>' + $textVal + ' added at ' + dateAdded  + '</li>');


	$('#textVal').val(' ');
});