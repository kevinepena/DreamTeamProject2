function achievementUnlocked(text) {
  var hasClass = $(".ach").hasClass("achieved");
  if (hasClass) return;
  $(".title").html("Achievement unlocked!");
  $(".detail").html(text);
  $(".ach").addClass("achieved");
  setTimeout(function() {
    $(".ach").removeClass("achieved");
  }, 5000);
}

jQuery(document).ready(function() {
  if ($(".cd-stretchy-nav").length > 0) {
    var stretchyNavs = $(".cd-stretchy-nav");

    stretchyNavs.each(function() {
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find(".cd-nav-trigger");

      stretchyNavTrigger.on("click", function(event) {
        event.preventDefault();
        stretchyNav.toggleClass("nav-is-visible");
      });
    });

    $(document).on("click", function(event) {
      !$(event.target).is(".cd-nav-trigger") &&
        !$(event.target).is(".cd-nav-trigger span") &&
        stretchyNavs.removeClass("nav-is-visible");
    });
  }
});
