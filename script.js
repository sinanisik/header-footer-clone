$(document).ready(function() {
    $('#textSearch_ara').click(function() {
        var str = $("#search_word").val();
        alert("Girilen:" + str);
    });

    $("#textSearch_input").each(function() {

        var $x = $(this).find(".search-icon"),
            $inp = $(this).find("input:text"),
            $cle = $(this).find(".reset-icon");

        $x.mouseover(function() {
            console.log("bastın"); 
        });

        $inp.mouseover(function() {
            console.log("bassss"); 
        });

        $inp.on("input", function(){
            $cle.toggle(!!this.value);
        });

        $cle.on("touchstart click", function(e) {
            e.preventDefault();
            $inp.val("").trigger("input");
        });

    });

});


