$(document).ready(function(){
  $.ajax({
       url: "https://www.yelp.com/menu/pike-place-chowder-seattle",
       dataType: 'text',
       success: function(data) {
            var elements = $("<div>").html(data)[0].getElementsByClassName("item")[0];
            for(var i = 0; i < elements.length; i++) {
                 var el = elements[i].firstChild.nodeValue;
                 // Do something here
                 var price = el[i].getElementsByClassName("item_price")[0].firstChild.nodeValue;
                 var name = el[i].getElementsByClassName("cpa")[0].firstChild.nodeValue;
                 var description = el[i].getElementsByClassName("item_description")[0].firstChild.nodeValue;

                 $('#menu tr:last').after('<tr><td>' + name + '</td><td><img src="hotdog.jpg" style="width:200px;height:200px;"></td><td>' + price + '</td><td>' + description + '</td></tr>');
            }
       }
  });

  $.ajax({
    type: "POST",
    url: "https://api.locu.com/v2/venue/search/",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({ Markers: markers }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
        alert(errMsg);
    }
});
curl -X POST  -d '{"fields":["name","menu_items","location","categories","description"],"menu_item_queries":[{"price":{"$lt":6},"name":"burrito"}],"venue_queries":[{"location":{"locality":"San Francisco"}}],"api_key":"YOUR_API_KEY"}'

});
