class Venue {
    constructor(venue, name, post, timeStamp) {
        this.venue = venue;
        this.name = name
        this.post = post;
        this.timeStamp = timeStamp;
    }
    toString() {
        return this.venue + ', ' + this.name + ', ' + this.post + ', ' + this.timeStamp;
    }
}

// Firestore data converter
var venueConverter = {
    toFirestore: function (venue) {
        return {
            venue: venue.venue,
            name: venue.name,
            post: venue.post,
            timeStamp: venue.timeStamp
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Venue(data.venue, data.name, data.post, data.timeStamp)
    }
}
