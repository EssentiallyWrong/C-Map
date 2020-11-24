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
    //this function here is asynchronous, so nest the if else statement inside a function call
    //in the function(doc) so make it execute at the proper time.
    var venueRef = db.collection("Venue").where("venueID", "==", $placeID);
    venueRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var venueID = doc.id;
            console.log(venueID);
            if (doc.exists) {
                db.collection("Venue").doc(venueID)
                    .collection("posts").doc()
                    .withConverter(postConverter)
                    .set(new Post($placeName, $userName, $userID, $textVal, dateAdded));


                //This part ^^^ is the one not doing it so far, statement just moves to else each time.
                //Try to work with some timeouts or something before this if statement in case it is being processed
                //before the asynchronous server query above is finished.

            } else {
                console.log("else!!")
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
    });




});