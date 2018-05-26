$(document).ready(function() {

  $(".project").click(function() {
    $(".project-info").show();
  });

  $(".project").on("mouseleave", function() {
    $(".project-info").hide();
  })
});
