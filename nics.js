$(document).ready(function() {

    $("#registrationForm").submit(function(event) {

        event.preventDefault();

        let fullname = $("#fullname").val().trim();
        let email = $("#email").val().trim();
        let course = $("#course").val();
        let year = $("#year").val();

        if (fullname !== "" && email !== "" && course !== "" && year !== "") {

            $("#message").html(
                '<div class="alert alert-success">' +
                'Registration successful! Welcome, ' +
                $('<div>').text(fullname).html() + '!' +
                '</div>'
            );

            $("#registrationForm")[0].reset();

        } else {

            $("#message").html(
                '<div class="alert alert-danger">' +
                'Please fill out all fields.' +
                '</div>'
            );

        }

    });

});