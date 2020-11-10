$('#submit').on('click', function (e) {
            var $textVal = $('#textVal').val();
            var $listItems = $('.listItems');
            var dateAdded = new Date();

            $listItems.prepend('<li>' + $textVal + ' added at ' + dateAdded + '</li>');


            $('#textVal').val(' ');
            db.collection("Posts").doc("Venue").set({
                    name: $textVal + ' added at ' + dateAdded,
                })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);

                });
            });