$("#edit").hide();
$("#googlePlaceID").hide();



$(".goBack").on('click', function (e) {
    if($('#edit').is(":visible")){

        $('#edit').hide(200);
        $("#info").show(200);
    } else {
        $("#info").hide(200);
        $('#edit').show(200);
    }
});

$(".change").on('click', function (e) {
    if($('#edit').is(":visible")){

        $('#edit').hide(200);
        $("#info").show(200);
    } else {
        $("#info").hide(200);
        $('#edit').show(200);
    }
});

$(".hidePane").on('click', function (e) {

    if ($('#overlay').is(":visible")){
        $('#overlay').hide(1000);
    } else {
        $("#overlay").show(1000);
    }

});

$(".showPane").on('click', function (e) {
    $("#overlay").show(1000);


});