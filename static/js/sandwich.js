/**
 * Created by carlos on 9/12/14.
 */

var PAWS = PAWS || {};

PAWS.sandwich = {

    bindSandiwch: function() {
        $('.sandwich-button').on('click', function() {
            PAWS.sandwich._displayResponsiveMenu();
        });
    },
    _displayResponsiveMenu: function() {
        var list = $('.top-nav').find('ul');
        if (!$(list).hasClass('shown')) {
            $(list).addClass('shown');
        } else {
            $(list).removeClass('shown');
        }
    }
};


$(document).ready(function() {
    PAWS.sandwich.bindSandiwch();
});