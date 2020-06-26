$(document).ready(function () {
  let windowHeight = $(window).height();
  // TABS
  $(".desctiption__nav").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.desctiption")
      .find("div.desctiption__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  $(".header__button").on("click", function () {
    $(".header__button").toggleClass("transform"); // ANIMATE BUTTON
    if ($(".navigate").offset().left != 0) {
      // ANIMATE NAVIGATION
      $(".navigate").css("left", "0");
    } else {
      $(".navigate").css("left", "100%");
    }
  });

  let bingo = parseFloat($(".money__cash ").children().text());
  let jackpot = parseFloat($(".money__up ").children().text());
  let percentJackpot = (bingo / jackpot) * 100;

  setTimeout(function () {
    // ANIMATE ROGRESS
    $(".money__equalize").css("width", `${percentJackpot}%`);
  }, 1000);
});
