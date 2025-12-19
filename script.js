$(document).ready(function () {

    
    $("img").hide().fadeIn(1200);

    
    $("article").click(function () {
        $(this).find(".article-content").slideToggle(500);
    });

    
    $("article").hover(
        function () {
            $(this).css("transform", "scale(1.03)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

});
