function readQuote() {
    db.collection("quotes").doc("01")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().message);
            document.getElementById("abc").innerText = snap.data().message;
        })
}
/*
function postRead() {


    db.collection("readTests").doc("dObVaNLqiOcsHHnq7ym9").collection("Post").doc("asdf")
        .onSnapshot(function (snap) {
            document.getElementById("readTest").innerText = snap.data().post;

        })
}

postRead();




//ChIJ5f5T_SF3hlQRnRB6ZAeyWjU

function testCheck(str) {
    db.collection("Venue")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.data());
                if(doc.data().venueID == str){
                    fillCards();
                } else {
                    addEmptyCard();
                }


            })
        })
}*/
var venueRef;

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

            $("#posts").append('<div id = "disposable"> </div>');
            snap.forEach(function (doc) {
                console.log(doc.data());
                var post = doc.data().post;
                

                $("#disposable").append(
                    '<div class="card"   >' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">Dummy Post</h5>' +
                    '<h6 class="card-subtitle mb-2 text-muted">User</h6>' +
                    ' <p class="card-text">' + post + "</p>" +

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