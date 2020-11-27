$('#submit').on('click', function (e) {
    var $listItems = $('.listItems');


    var $userName = $('#userName').text();
    var $userID = $('#userID').text();
    var $placeID = $('#googlePlaceID').text();
    var $placeName = $('#locationName').text();
    var $textTitle = $('#exampleFormControlInput1').val();
    var $textVal = $('#exampleFormControlTextarea1').val();
    var dateAdded = new Date();

    $('#textVal').val(' ');

    if ($textTitle == "" || $textVal == "") {

        $listItems.text('Fields Required');
    } else {

        $listItems.text('Your post has been submitted.');


        var venueRef = db.collection("Venue").where("venueID", "==", $placeID);
        venueRef.get().then(function (querySnapshot) {
            if (querySnapshot.empty) {
                console.log("No existing Venue ...Creating new venue!!");
                var venueIdentifier = db.collection("Venue").doc().id;

                db.collection("Venue").doc(venueIdentifier)
                    .withConverter(venueConverter)
                    .set(new Venue($placeID, $placeName));

                db.collection("Venue").doc(venueIdentifier)
                    .collection("posts").doc()
                    .withConverter(postConverter)
                    .set(new Post($placeName, $userName, $userID, $textTitle, $textVal, dateAdded));
                testCheck($placeID);

            } else {
                querySnapshot.forEach(function (doc) {
                    var venueID = doc.id;
                    console.log(venueID);
                    if (doc.exists) {
                        console.log("detected existing venue....updating!!!");
                        db.collection("Venue").doc(venueID)
                            .collection("posts").doc()
                            .withConverter(postConverter)
                            .set(new Post($placeName, $userName, $userID, $textTitle, $textVal, dateAdded));
                        testCheck($placeID);
                    }
                }); 
            }
            $('#exampleFormControlInput1').val('');
            $('#exampleFormControlTextarea1').val('');


        });


    }


});