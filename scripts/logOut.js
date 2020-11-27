$('#loginlink').on('click', function (e) {
    firebase.auth().signOut().then(function () {
        console.log("logging out user");
    }).catch(function (error) {
        console.log("error");
    });
});