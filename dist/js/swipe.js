// function visitPage() {
//   window.location = "sign-in.html";
// };

function filterMembers() {
  $(".filterMembers")
    .not(".all")
    .hide("3000"),
    $(".filterMembers")
      .not(".all")
      .hide("3000"),
    $(".filterMembersBtn").click(function() {
      var t = $(this).attr("data-filter");
      $(".filterMembers")
        .not("." + t)
        .hide("3000"),
        $(".filterMembers")
          .filter("." + t)
          .show("3000");
    });
}

function filterDiscussions() {
  $(".filterDiscussions")
    .not(".all")
    .hide("3000"),
    $(".filterDiscussions")
      .not(".all")
      .hide("3000"),
    $(".filterDiscussionsBtn").click(function() {
      var t = $(this).attr("data-filter");
      $(".filterDiscussions")
        .not("." + t)
        .hide("3000"),
        $(".filterDiscussions")
          .filter("." + t)
          .show("3000");
    });
}

function filterNotifications() {
  $(".filterNotifications")
    .not(".all")
    .hide("3000"),
    $(".filterNotifications")
      .not(".all")
      .hide("3000"),
    $(".filterNotificationsBtn").click(function() {
      var t = $(this).attr("data-filter");
      $(".filterNotifications")
        .not("." + t)
        .hide("3000"),
        $(".filterNotifications")
          .filter("." + t)
          .show("3000");
    });
}

function people() {
  $("#people").on("keyup", function() {
    var t = $(this)
      .val()
      .toLowerCase();
    $("#contacts a").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(t) > -1
      );
    });
  });
}

function conversations() {
  $("#conversations").on("keyup", function() {
    var t = $(this)
      .val()
      .toLowerCase();
    $("#chats a").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(t) > -1
      );
    });
  });
}

function notice() {
  $("#notice").on("keyup", function() {
    var t = $(this)
      .val()
      .toLowerCase();
    $("#alerts a").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(t) > -1
      );
    });
  });
}

function chageDarkMode() {
  (clicked = !0),
    $(".mode").click(function() {
      clicked
        ? ($("head").append(
            '<link href="dist/css/dark.min.css" id="dark" type="text/css" rel="stylesheet">'
          ),
          (clicked = !1))
        : ($("#dark").remove(), (clicked = !0));
    });
}

// function spinLoaded() {
//   $("#loading").css("display", "none");
// }

// function spinLoading() {
//   $("#loading").css("display", "inline-block");
// }
// function loadAnimation() {
//   $(document).ajaxStart(function() {
//     spinLoading();
//   });
//   $(document).ajaxEnd(function() {
//     spinLoaded();
//   });
// }

$(window).on("load", function(event) {
  $("body").removeClass("preloading");
  $(".loader")
    .delay(2000)
    .css("display", "none");
  // $(".loader")
  //   .delay(1000)
  //   .fadeOut("fast");
});

$(".menu a i").on("click", function() {
  $(".menu a i").removeClass("active"), $(this).addClass("active");
});
$("#contact, #recipient").click(function() {
  $(this).remove();
});
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {

  filterMembers();

  filterDiscussions();

  filterNotifications();

  people();

  conversations();

  notice();

  chageDarkMode();
});

$(".back").click(function() {
  $("#call" + $(this).attr("name")).hide(),
    $("#chat" + $(this).attr("name")).removeAttr("style");
});

$(".connect").click(function() {
  $("#chat" + $(this).attr("name")).hide(),
    $("#call" + $(this).attr("name")).show();
});
