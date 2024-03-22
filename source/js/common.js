$(function () {


  $(".grid tbody").on("click", function(){

    if($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {

      $(".grid tbody").removeClass("selected");
      $(this).addClass("selected");
    }
  
  });




});

