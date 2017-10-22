$(document).ready(function(){
  var success;
  $.ajax({
    url: "https://api.yelp.com/oauth2/token",
    type: "POST",
    data: {
      grant_type: "client_credentials",
      client_id: "mOZOEQwMZe0EyJUqUO54Uw",
      client_secret: "gh3yIuLf4whkvMaYVw9PwxbrmCMpPHFtTvlMxGrHSRpIjFMJfGzlQKhSpQjWN1nZ"},
    header: {
              'Content-type': 'application/x-www-form-urlencoded'
          },
    datatype: "jsonp",
    success: success
  }).done(function (data) {
    $('#test').append(data);
  });
});
