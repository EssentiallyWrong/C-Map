class Venue {
    constructor(venueID, venueName) {
        this.venueID = venueID;
        this.venueName = venueName

    }
    toString() {
        return this.venueID + ', ' + this.venueName;
    }
}

// Firestore data converter
var venueConverter = {
    toFirestore: function (venue) {
        return {
            venueID: venue.venueID,
            venueName: venue.venueName,
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Venue(data.venueID, data.venueName)
    }
}
