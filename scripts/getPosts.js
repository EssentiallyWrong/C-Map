class Venue {
    constructor(venue, name, post) {
        this.venue = venue;
        this.name = name
        this.post = post;
    }
    toString() {
        return this.venue + ', ' + this.name + ', ' + this.post;
    }
}

// Firestore data converter
var venueConverter = {
    toFirestore: function (venue) {
        return {
            venue: venue.venue,
            name: venue.name,
            post: venue.post
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Venue(data.venue, data.name, data.post)
    }
}
