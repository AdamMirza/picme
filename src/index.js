$(document).ready(function(){
  $.ajax({
       url: "/thePageToScrape.html",
       dataType: 'text',
       success: function(data) {
            var elements = $("<div>").html(data)[0].getElementsByClassName("")[0].getElementsByTagName("li");
            for(var i = 0; i < elements.length; i++) {
                 var theText = elements[i].firstChild.nodeValue;
                 // Do something here
            }
       }
  });
});
