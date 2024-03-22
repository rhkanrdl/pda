$(function () {


  $(".grid tbody").on("click", function(){

    $(this).find("input").prop('checked', true);
    $(".grid tbody").removeClass("selected");
    $(this).addClass("selected");
  
  });




});

