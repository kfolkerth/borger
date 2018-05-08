$(function() {
    console.log("loaded");
    $(".change-status").on('click', function(event) {
        var id = $(this).data('id');

        $.ajax("/api/burgers/" + id, {
            type : "PUT",
            data : undefined
        }).then(
            function() {
                console.log("window should reload now");
                location.reload();
            }
        );
    });

    $(".create-form").on('submit', function(event) {
        event.preventDefault();

        var newBurg = {
            name : $("#ca").val().trim()
        }
        console.log(newBurg);

        $.ajax("/api/burgers", {
            type : "POST",
            data : newBurg
        }).then(
            function() {
                console.log("burg uploaded");
                location.reload();
            }
        )
    })

})