/* Löser hamburgermenyn */

$(document).ready(function() {

    $("#burgerImage").on("click", function() {

        $(".toggleNavigation ul").toggleClass("open");
        //$("#flyingDragon").hide("fast");
        // $("#flyingDragon").toggleClass("open”); - öppnas och stängs
 

    });   
});


function initMap() {
    var location = {lat: 59.336070, lng: 18.051250};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
  }