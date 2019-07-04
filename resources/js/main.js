$(document).ready(function() {

  $(".project-one").click(function() {
    $(".project-info-one").show();
  });

  $(".project-one").on("mouseleave", function() {
    $(".project-info-one").hide();
  })

  $(".project-two").click(function() {
    $(".project-info-two").show();
  });

  $(".project-two").on("mouseleave", function() {
    $(".project-info-two").hide();
  })

  $(".project-three").click(function() {
    $(".project-info-three").show();
  });

  $(".project-three").on("mouseleave", function() {
    $(".project-info-three").hide();
  })

  $(".project-four").click(function() {
    $(".project-info-four").show();
  });

  $(".project-four").on("mouseleave", function() {
    $(".project-info-four").hide();
  })

  $(".project-five").click(function() {
    $(".project-info-five").show();
  });

  $(".project-five").on("mouseleave", function() {
    $(".project-info-five").hide();
  })
});
