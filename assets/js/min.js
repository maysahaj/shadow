$(document).ready(function(){
     $(".click").click(function(){
         $("#shadow").fadeIn(500);
         $(".popUp").fadeIn(500);
     });
});


$(".close" , "#shadow" ).click(function(){
    $( "#shadow").click(function(){
        $("#shadow").fadeOut(500);
        $(".popUp").fadeOut(500);
    });
});



