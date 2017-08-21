$(document).ready(function() {

    $("a#drawid").on("click", function() {

        $.post("drawindex.html", function(data) {

            $("#myModalDiv").html(data).fadeIn();

        });


    });

});