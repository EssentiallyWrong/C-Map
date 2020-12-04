//------------------------------------------------------------------------------------------
// Post Constructor class that creates post objects based upon 6 input parameters
// venueID: Google Places generated ID for each venue
// userID: Automatically generated unique userID retrieved after login; no user would return anonymous and "" in database
// userName: User name entered during account creation; no user would return anonymous and "" in database
// title: Title of post
// post: Main text body of post
// timeStamp: Automatically generated and custom formatted for the time that post was created
//------------------------------------------------------------------------------------------
class Post {
    constructor(venueID, userID, userName, title, post, timeStamp) {
        this.venueID = venueID;
        this.userName = userName;
        this.userID = userID;
        this.title = title;
        this.post = post;
        this.timeStamp = timeStamp;
    }
    toString() {
        return this.venueID + ', ' + this.userName + ', ' + this.userID + ', ' + this.title + ', ' + this.post + ', ' + this.timeStamp;
    }
}

// Firestore data converter
var postConverter = {
    toFirestore: function (post) {
        return {
            venueID: post.venueID,
            userName: post.userName,
            userID: post.userID,
            title: post.title,
            post: post.post,
            timeStamp: post.timeStamp
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Post(data.venueID, data.userName, data.userID, data.title, data.post, data.timeStamp)
    }
}
