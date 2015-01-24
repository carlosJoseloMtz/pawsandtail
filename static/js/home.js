// declare the object
var PAWS = PAWS || {};

PAWS.home = {

    bindAll: function() {
        $('#main-carousel').carousel();
    }

}

$(document).ready(function() {
    PAWS.home.bindAll();
});