//---------------------------------------------------
// This function will check to see if the user is signed in.
// If user does not exist, their login information will be
// stored to the database under "users" collection with
// unique documents to represent each user.
//----------------------------------------------------
function getUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user is signed in");
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    var g = user.uid;
                    $("#userName").append(n);
                    $("#userID").append(g);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getUser();

//---------------------------------------------------
// This function will check to see if the user is signed in.
// If signed in, it will disable the login button and replace
// it with text --> "Logout"
// Clicking on "Logout" will clear the user information
// and put them under the "Anonymous" user account (as
// it was before they signed in).
//----------------------------------------------------
function disableLoginLink() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            document.getElementById("loginlink").href = "index.html";
            document.getElementById("loginlink").innerHTML = "Logout";
        }
    })
}
disableLoginLink();