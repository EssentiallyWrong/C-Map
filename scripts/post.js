$('#submit').on('click', function (e) {
    var $textVal = $('#textVal').val();
    var $listItems = $('.listItems');
    var dateAdded = new Date();

    $listItems.prepend('<li>' + 'Your post has been submitted.' + '</li>');


    $('#textVal').val(' ');

    db.collection("venues").doc()
        .withConverter(venueConverter)
        .set(new Venue("BCIT", "Steven", $textVal, dateAdded))
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

});
$("#edit").hide();

$(".change").on('click', function (e) {
    if($('#edit').is(":visible")){

        $('#edit').hide(200);
        $("#info").show(200);
    } else {
        $("#info").hide(200);
        $('#edit').show(200);
    }
});

$(".hidePane").on('click', function (e) {

    if ($('#overlay').is(":visible")){
        $('#overlay').hide(1000);
    } else {
        $("#overlay").show(1000);
    }

});

$(".showPane").on('click', function (e) {
    $("#overlay").show(1000);
    

});
