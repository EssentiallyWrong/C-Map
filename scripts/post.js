class Post {
    constructor(venueID, userID, userName, post, timeStamp) {
        this.venueID = venueID;
        this.userName = userName;
        this.userID = userID;
        this.post = post;
        this.timeStamp = timeStamp;
    }
    toString() {
        return this.venueID + ', ' + this.userName + ', ' + this.userID + ', ' + this.post + ', ' + this.timeStamp;
    }
}

// Firestore data converter
var postConverter = {
    toFirestore: function(post) {
        return {
            venueID: post.venueID,
            userName: post.userName,
            userID: post.userID,
            post: post.post,
            timeStamp: post.timeStamp
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Post(data.venueID, data.userName, data.userID, data.post, data.timeStamp)
    }
}
