function fade() {
  $(".loading").fadeOut("slow");
  }
  setTimeout(fade, 3000);


  function resetSpin() {
    $("#block1").removeClass("spins");
    $("#block2").removeClass("spins");
    $("#block3").removeClass("spins");
    $("#block4").removeClass("spins");
    $("#block5").removeClass("spins");
    $("#block6").removeClass("spins");
    $("#block7").removeClass("spins");
    $("#block8").removeClass("spins");
    $("#block9").removeClass("spins");
    }

  $(".right img").on("click",function(){
      $("#block1").removeClass("spins").addClass("spins");
      $("#block2").removeClass("spins").addClass("spins");
      $("#block3").removeClass("spins").addClass("spins");
      $("#block4").removeClass("spins").addClass("spins");
      $("#block5").removeClass("spins").addClass("spins");
      $("#block6").removeClass("spins").addClass("spins");
      $("#block7").removeClass("spins").addClass("spins");
      $("#block8").removeClass("spins").addClass("spins");
      $("#block9").removeClass("spins").addClass("spins");
      setTimeout(resetSpin,2000);
    }
)

