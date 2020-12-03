

var venueRef;


marker();
;

function testCheck(str) {
    document.getElementById("disposable").remove();

    venueRef = db.collection("Venue").where("venueID", "==", str);
    venueRef.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
            addEmptyCard();

        } else {
            querySnapshot.forEach(function (doc) {
                var venueID = doc.id;
                console.log(venueID);
                if (doc.exists) {
                    fillCards(db.collection("Venue").doc(venueID));


                }
            });
            /**   querySnapshot.forEach(function (doc) {

                   var venueIdentifier = doc.id;
                   console.log(venueIdentifier.venueID);
                   fillCards(valueIdentifier);


               })*/
        }

    });
}




function fillCards(venue) {


    venue.collection("posts")
        .get()
        .then(function (snap) {
            var i = 0;

            $("#posts").append('<div id = "disposable">  </div>');
            snap.forEach(function (doc) {
                console.log(doc.data());
                var post = doc.data().post;
                var userId = doc.data().userID;
                var title = doc.data().title;

                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var time = doc.data().timeStamp;

                if (userId == "") {
                    userId = "Anonymous";
                }


                $("#disposable").append(
                    '<div class="card userpost"   >' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + title + '</h5>' +
                    '<h6 class="card-subtitle mb-2 text-muted">' + userId + '</h6>' +
                    ' <p class="card-text">' + post + "</p>" +
                    ' <p class="time">' + time + "</p>" +

                    '</div>' +
                    '</div>')

            })
        })
}

function addEmptyCard() {


    $("#posts").append('<div id = "disposable"> </div>');

    $("#disposable").append(

        '<div class="card userpost" id = "no-posts" >' +
        '<div class="card-body">' +
        ' <p class="card-text">' + "No comments yet</p>" +
        '</div>' +
        '</div>'
    )

}