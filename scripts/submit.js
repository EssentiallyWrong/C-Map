//------------------------------------------------------------------------------------------
// Performs a number of functions and actions when the submit button is clicked on the "Add Posts"
// overlay. This script defines the actions that will occur when a user clicks the submit button to
// store their post after typing it in.
//
//------------------------------------------------------------------------------------------

$('#submit').on('click', function (e) {
    var $listItems = $('.listItems');
    var $userName = $('#userName').text();
    var $userID = $('#userID').text();
    var $placeID = $('#googlePlaceID').text();
    var $placeName = $('#locationName').text();
    var $textTitle = $('#exampleFormControlInput1').val();
    var $textVal = $('#exampleFormControlTextarea1').val();

    //------------------------------------------------------------------------------------------
    // These area is responsible for creation of date object to represent the timeStamp for
    // when the submit button was clicked. It then formats it into a more user-friendly
    // string and outputs the result into a variable used in the post constructor.
    //------------------------------------------------------------------------------------------

    var dateAdded = new Date();
    var a_p = "";
    var curr_date = dateAdded.getDate();
    var curr_month = dateAdded.getMonth() + 1; //Months are zero based
    var curr_year = dateAdded.getFullYear();
    var curr_hour = dateAdded.getHours();
    var curr_min = dateAdded.getMinutes();

    if (curr_hour < 12) {
        a_p = "AM";
    } else {
        a_p = "PM";
    }

    if (curr_hour == 0) {
        curr_hour = 12;
    }

    if (curr_hour > 12) {
        curr_hour = curr_hour - 12;
    }

    if (curr_min < 10) {
        cur_min = "0" + curr_min;
    }

    dateAdded = curr_date + "-" + curr_month + "-" + curr_year + " at " + curr_hour + ":" + curr_min + " " + a_p;

    $('#textVal').val(' ');

    if ($textTitle == "" || $textVal == "") {

        $listItems.text('Fields Required');
    } else {

        $listItems.text('Your post has been submitted.');

        //------------------------------------------------------------------------------------------
        // Responsible for detecting if an identical venue object has already been created, and will
        // update the existing venue if one is found. It compares all the documents in the "Venue"
        // collection to see if any match the venueID (from google places). If it finds a match
        // (discovers an existing venue) the else statement will update the existing venue with the
        // new post instead of creating two of the same venue objects.
        //------------------------------------------------------------------------------------------

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
                fillPost($placeID);

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
                        fillPost($placeID);
                    }
                });
            }
            $('#exampleFormControlInput1').val('');
            $('#exampleFormControlTextarea1').val('');


        });


    }


});