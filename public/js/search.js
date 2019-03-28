$("#searchb").click(function() {
  $('#content_box').html('');
  $.ajax({
    type: "get",
    url: "/api/mediacenter/v1.0/search/" + $('#keywords').val()
  }).then(function(data) {
    data.forEach(function(entry) {
      $('#content_box').append('<a href="' + entry.href + '">' + entry.title + '</a><br>');
    });
  });
}); 
