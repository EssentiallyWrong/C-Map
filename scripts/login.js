// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type is not needed as users are redirected to index.html anyways.
            //------------------------------------------------------------------------------------------

            // If user does not exist in database, creates new "users" collection, with unique document
            // ID's for each user account. Each document contains user email and user name.
            //------------------------------------------------------------------------------------------
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {
                db.collection("users").doc(user.uid).set({
                        name: user.displayName,
                        email: user.email
                    }).then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("index.html");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.

            //------------------------------------------------------------------------------------------
            //Was causing Javascript error so commented out last section.
            //document.getElementById('loader').style.display = 'none';
            document.getElementById('loader')
        }
    },

    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
        //------------------------------------------------------------------------------------------
        //Commented out all forms of authentication except email, which we are using.
        //------------------------------------------------------------------------------------------
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'index.html',
    // Privacy policy url.
    privacyPolicyUrl: 'index.html',

    //------------------------------------------------------------------------------------------
    //Was causing JavaScript errors so commented out for now.
    //accountChooserEnabled: false

};
// The start method will wait until the DOM is loaded.
// Then it will inject the login interface into the HTML.
ui.start('#firebaseui-auth-container', uiConfig);