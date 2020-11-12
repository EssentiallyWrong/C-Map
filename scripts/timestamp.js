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
$('#edit').hide(1000);
$("#hide").on('click', function (e) {

    if ($('#edit').is(":visible")) {
        $('#edit').hide(1000);
    } else {
        $("#edit").show(1000);
    }

})