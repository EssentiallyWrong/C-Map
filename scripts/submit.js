$('#submit').on('click', function (e) {
    var $listItems = $('.listItems');
    $listItems.prepend('<li>' + 'Your post has been submitted.' + '</li>');

    var $userName = $('#userName').text();
    var $userID = $('#userID').text();
    var $placeID = $('#googlePlaceID').text();
    var $placeName = $('#locationName').text();
    var $textVal = $('#textVal').val();
    var dateAdded = new Date();

    $('#textVal').val(' ');

    //working on validation of identical inputs already present, should only update the post
    //instead of creating a whole new document for each identical venue.
    var venueRef = db.collection("Venue").where($placeID, "==", true).get()

    if (venueRef.exists) {
        var venueOverride = venueRef.id;
        db.collection("Venue").doc(venueOverride)
            .collection("posts").doc()
            .withConverter(postConverter)
            .set(new Post($placeName, $userName, $userID, $textVal, dateAdded));

        //This part ^^^ is the one not doing it so far, statement just moves to else each time.

    } else {
        var venueIdentifier = db.collection("Venue").doc().id;

        db.collection("Venue").doc(venueIdentifier)
            .withConverter(venueConverter)
            .set(new Venue($placeID, $placeName));

        db.collection("Venue").doc(venueIdentifier)
            .collection("posts").doc()
            .withConverter(postConverter)
            .set(new Post($placeName, $userName, $userID, $textVal, dateAdded))
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

    }

});


// Did you mean to delete this? I just saw it was removed in your merge so wanted to make sure before I wrecked everything
/*$(".change").on('click', function (e) {
    if ($('#edit').is(":visible")) {

        $('#edit').hide(200);
        $("#info").show(200);
    } else {
        $("#info").hide(200);
        $('#edit').show(200);
    }
});

$(".hidePane").on('click', function (e) {

    if ($('#overlay').is(":visible")) {
        $('#overlay').hide(1000);
    } else {
        $("#overlay").show(1000);
    }

});

$(".showPane").on('click', function (e) {
    $("#overlay").show(1000);


});
*/
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
