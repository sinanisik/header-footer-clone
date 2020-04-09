$(document).ready(function() {
    $('#textSearch_ara').click(function() {
        var str = $("#search_word").val();
        alert("Girilen:" + str);
    });

    $(".textSearch_input").each(function() {

        var $x = $(this).find(".search-icon"),
            $inp = $(this).find("input:text"),
            $cle = $(this).find(".reset-icon");

        $inp.click(function() {
            //            $inp.addClass();
        });

        $inp.on("input", function(){
            $cle.toggle(!!this.value);
        });

        $cle.on("touchstart click", function(e) {
            e.preventDefault();
            $inp.val("").trigger("input");
        });

    });

    $('.textSearch_input').click(function() {

        $(this).css('border', 'none');
        $('.textSearch_ara').addClass('btn-focused');
        $('.search-container').addClass('search-container-focused');
        $('.search-panel').css('display', 'block');

    });




    //    $('#search_word').focusin(function() {
    //       $('#textSearch_input').css("border", "none");
    //    });

});



