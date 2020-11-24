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



function fillCards() {
    db.collection("readTests").doc("dObVaNLqiOcsHHnq7ym9").collection("Post")
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

fillCards();



function addCard(s) {

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

//addCard();






function carlyCode(mycollection) {
    db.collection(mycollection)
        .get()
        .then(function (snap) {
            var i = 0;
            snap.forEach(function (doc) {
                console.log(doc.data());
                var name = doc.data().name;
                var address = doc.data().hood;
                i = i + 1;
                var card = "#c" + i;
                console.log(card);
                var d1 = $("posts").append(
                    "<div class='card user' style='width: 18rem;'>" +
                    "<img class='card-img-top' src='images/blah.jpg' alt='Card image cap'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + name + "</h5>" +
                    "<p class='card-text'> " + address + "</p>" +
                    "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                    "<div class='ratings'>" +
                    "* * * * * (stars go here)" +
                    "</div)" +
                    "</div>" +
                    "</div)");
            })
        })
}
carlyCode("Venue")