$(document).ready(function() {
     $("#reservation_form").submit(
        function(event) {

            var isValid=true;

            //Validating the Name
            var Name = $("#name").val().trim();
            if (Name == "") {
                $("#name").next().text("This field is required.");
                isValid = false;

            } else {
                $("#name").next().text("");
            }

            $("#name").val(Name);


            //Validating the email


            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val().trim();
            if (email == "") {

                $("#email").next().text("This field is required.");
                isValid = false;

            } else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);



            if (!isValid) {

                event.preventDefault();
            }
        }// end fn
    );//End submit
}); // end ready