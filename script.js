$(document).on("click", ".ball1", function () {
  $(this).css({
    top: $(this).position().top + "px",
    left: $(this).position().left + "px",
  });

  $(this).addClass("onclick1");

  setTimeout(function () {
    $("button.ball").each(function () {
      if (!$(this).hasClass("onclick1")) $(this).fadeOut(100);
    }, 50);
  });
});

$(document).on("click", ".ball2", function () {
    $(this).css({
      top: $(this).position().top + "px",
      left: $(this).position().left + "px",
    });
  
    $(this).addClass("onclick2");
  
    setTimeout(function () {
      $("button.ball").each(function () {
        if (!$(this).hasClass("onclick2")) $(this).fadeOut(100);
      }, 50);
    });
  });

  $(document).on("click", ".ball3", function () {
    $(this).css({
      top: $(this).position().top + "px",
      left: $(this).position().left + "px",
    });
  
    $(this).addClass("onclick3");
  
    setTimeout(function () {
      $("button.ball").each(function () {
        if (!$(this).hasClass("onclick3")) $(this).fadeOut(100);
      }, 50);
    });
  });

  
  $(document).on("click", ".ball4", function () {
    $(this).css({
      top: $(this).position().top + "px",
      left: $(this).position().left + "px",
    });
  
    $(this).addClass("onclick4");
  
    setTimeout(function () {
      $("button.ball").each(function () {
        if (!$(this).hasClass("onclick4")) $(this).fadeOut(100);
      }, 50);
    });
  });

  $(document).on("click", ".ball5", function () {
    $(this).css({
      top: $(this).position().top + "px",
      left: $(this).position().left + "px",
    });
  
    $(this).addClass("onclick5");
  
    setTimeout(function () {
      $("button.ball").each(function () {
        if (!$(this).hasClass("onclick5")) $(this).fadeOut(100);
      }, 50);
    });
  });
  
  



