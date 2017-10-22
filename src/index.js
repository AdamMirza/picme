$(document).ready(function(){
  var autocomplete;
  var input = document.getElementById("geocomplete");
  autocomplete = new google.maps.places.Autocomplete(input);

  console.log("OMG");

  var searchButton = $('#search-btn');

searchButton.click(function() {
    console.log("OMG2");
    // setup
    var place = autocomplete.getPlace();
    var searchData = ({
      term: $('#search-text').val(),
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng()
    });

    var settings = $.ajax({
      "async": true,
      "crossDomain": false,
      "url": "https://api.yelp.com/v3/businesses/search",
      "data": searchData,
      "method": "GET",
      "headers": {
        "authorization": "Bearer i9GHIHnpTlQrc-6QPTbHRqoQUnCoretv_422t8JjjnKjhW1tjRQ4XsunARcpuYIf1_NZvxMu0OYwh1E79zrtWN1JMbDAGzmrjL21hZgsUxHvbSpeRYYqyjR6k9fsWXYx",
        "cache-control": "no-cache"
      }
    });

    console.log("I HOPE ITS WORKING");

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    $('#locations').removeClass('hiding');
  });

});
