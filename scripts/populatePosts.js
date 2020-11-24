function readQuote() {
    db.collection("quotes").doc("01")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().message);
            document.getElementById("abc").innerText = snap.data().message;
        })
}

function postRead() {


    db.collection("readTests").doc("dObVaNLqiOcsHHnq7ym9").collection("Post").doc("asdf")
        .onSnapshot(function (snap) {
            document.getElementById("readTest").innerText = snap.data().post;

        })
}

postRead();

//ChIJ5f5T_SF3hlQRnRB6ZAeyWjU

function testCheck() {
    db.collection("Venue")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.data());
                if(doc.data().venueID == "ChIJ5f5T_SF3hlQRnRB6ZAeyWjU"){
                    fillCards();
                }
                

            })
        })
}

testCheck();



function fillCards() {
    db.collection("Venue").doc("1jXg7iSHlnq8DQe98kyH").collection("posts")
        .get()
        .then(function (snap) {
            var i = 0;
            snap.forEach(function (doc) {
                console.log(doc.data());
                var post = doc.data().post;
                var address = doc.data().hood;
                i = i + 1;
                var card = "#c" + i;
                console.log(card);
                $("#posts").append(
                    '<div class="card userpost" >' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">Dummy Post</h5>' +
                    '<h6 class="card-subtitle mb-2 text-muted">User</h6>' +
                    ' <p class="card-text">' + post + "</p>" +

                    '</div>' +
                    '</div>') 

            })
        })
}





function addCard() {

    $("#posts").append(

        '<div class="card userpost" >' +
        '<div class="card-body">' +
        '<h5 class="card-title">Dummy Post</h5>' +
        '<h6 class="card-subtitle mb-2 text-muted">User</h6>' +
        ' <p class="card-text">' + s +"Some quick example text to build on the card title and make up thebulk of the card's content.</p>" +

        '</div>' +
        '</div>'
    )

}

addCard();






