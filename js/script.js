"use strict";

$(document).ready(function() {
   
    // Toggle responsive main menu
    $('.btn-responsive').click(function(event) {
        $('#main-nav ul').toggleClass('visible');
        event.preventDefault();
    });
   
    // Bootstrap's Carousel settings
    $('#carousel-main-promo').carousel({
        interval: 10000
    });
    
    /**
     * Extends bootstrap's carousel
     * - added possibility to scroll 3 items at the same time
     */
    $('.carousel-promo .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    
});