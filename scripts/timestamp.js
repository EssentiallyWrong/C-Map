$('#submit').on('click', function (e) {
    var $textVal = $('#textVal').val();
    var $listItems = $('.listItems');
    var dateAdded = new Date();

    $listItems.prepend('<li>' + $textVal + ' added at ' + dateAdded + '</li>');


    $('#textVal').val(' ');
    db.collection("Posts").add({
            "name": $textVal + ' added at ' + dateAdded,
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);

        });
    db.collection("venues").doc()
        .withConverter(venueConverter)
        .set(new Venue("BCIT", "Steven", "WHATTHEHELL"));

    db.collection("venues").doc()
        .withConverter(venueConverter)
        .set(new Venue("BCIT", "Tony", "WHATTHEHELL"));
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