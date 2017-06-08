(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

var counter = 6;
var hrefsrc = "";
var finalImg = 0;

const gallery = document.getElementById("gallery");
const page = window.location.pathname.split("/").pop();
const beforehref = "<div class='row no-gutter margin-bott-more'><div class='col-lg-7 col-sm-8 col-centered'><a href=";
const aftersrc = " class='img-responsive' alt=''></a></div></div>";

function makeString() {
    if(page == "albumLondon.html") {
        finalImg = 144;
        hrefsrc = "'../img/london/london (" + counter + ").JPG'><img src='../img/london/london (" + counter + ").JPG'";
    }
    else if(page == "albumDublin.html") {
        finalImg = 93;
        hrefsrc = "'../img/dublin/dublin (" + counter + ").JPG'><img src='../img/dublin/dublin (" + counter + ").JPG'";
    }
    var str = beforehref + hrefsrc + aftersrc;
    counter++;
    return str;
}

function addHTML() {
    var totalString = "";
    for(var i = 0; i < 10; i++) {
        if(counter == finalImg + 1) break;
        totalString += makeString();
    }

    gallery.insertAdjacentHTML('beforeend', totalString);

    if(counter == finalImg + 1) {
        var elem = document.getElementById("moreButton");
        elem.parentNode.removeChild(elem);
    }
}