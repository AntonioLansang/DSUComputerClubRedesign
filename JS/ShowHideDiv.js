

$(document).ready(function() {
    $("#jdom h1").click(function(evt) {
        $(this).next().slideToggle("slow");
        /*if ($(this).attr("class") !== "minus") {
            $(this).next().slideDown("slow");
        }
        else {
            $(this).next().slideUp("slow");
        }*/
        evt.preventDefault();
    }); // end click

}); // end ready
/*

$(document).ready(function(){
    $(".News").click(function(){
        $(".NewsCo ntent").slideDown("slow");
    });
});


*/





