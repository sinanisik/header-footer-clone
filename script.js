$(document).ready(function() {

    $('.textSearch_input').click(function(e) {
        $('.search-container').addClass('search-container-focused');
        $('.textSearch_input').addClass('textSearch_input_focused');
        $('.textSearch_ara').addClass('btn-focused');
        $('.search-cont').addClass('.search-panel');
        e.stopPropagation()
    });
    
    $(document).click(function(){
        $('.search-container').removeClass('search-container-focused');
        $('.textSearch_input').removeClass('textSearch_input_focused');
        $('.textSearch_ara').removeClass('btn-focused');
        
    });


});



