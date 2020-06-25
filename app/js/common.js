$(document).ready(function () {
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
});
