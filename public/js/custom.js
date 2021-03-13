
var testing = false;
$(window).scroll(function () {
    if ($(this).scrollTop() < $("#designer").offset().top - 30) {
        $("#grey-box").addClass('full-opacity');
    }
    else {
        $('#grey-box').removeClass('full-opacity');
    };
});
$(window).scroll(function () {
    var eh = $('header').height();
    var dh = $('#designer').height();
    //  var odv = $('#developer').offset.top() + 50;         
    //  var op = $('#projects').offset.top() + 50;         
    //  var oc = $('#contacts').offset.top() + 50;
    var fraction = (30 / 100) * eh
    var nav = $('nav');
    var red = $('#red-box');

    if ($(this).scrollTop() > (30 / 100) * eh && $(this).scrollTop() < ($('#designer').offset().top + (30 / 100) * dh)) {
        nav.addClass('red-bg');
        red.addClass('full-opacity');
    }
    else {
        nav.removeClass('red-bg');
        red.removeClass('full-opacity');
    };
    // ($(this).scrollTop() > odv)?nav.addClass('blue-bg'):nav.removeClass('blue-bg')
    // ($(this).scrollTop() > op)?nav.addClass('orange-bg'):nav.removeClass('orange-bg')
    // ($(this).scrollTop() > oc)?nav.addClass('green-bg'):nav.removeClass('green-bg') 

    // else if(scrolled > 200){      
    //    $("#dv-item").fadeIn("slow"); 
    //  }

});

$(window).scroll(function () {
    var nav = $('nav');
    var dh = $('#designer').height();
    var ph = $('#projects').height();
    var blue = $('#blue-box');
    if ($(this).scrollTop() > ($("#designer").offset().top + (30 / 100) * dh) && $(this).scrollTop() < ($('#projects').offset().top - 30)) {
        nav.addClass('blue-bg');
        blue.addClass('full-opacity')
    }
    else {
        nav.removeClass('blue-bg');
        blue.removeClass('full-opacity');
    };
});

$(window).scroll(function () {
    var nav = $('nav');
    var deh = $('#developer').height();
    var ch = $('#projects').height();
    var orange = $('#orange-box');
    if ($(this).scrollTop() > ($("#developer").offset().top + (30 / 100) * deh) && $(this).scrollTop() < ($('#projects').offset().top + (30 / 100) * ch)) {
        nav.addClass('orange-bg');
        orange.addClass('full-opacity');
    }
    else {
        nav.removeClass('orange-bg');
        orange.removeClass('full-opacity');
    };
});

// $(window).scroll(function () {
//     var nav = $('nav');
//     var ph = $('#projects').height();
//     var ch = $('#contacts').height();
//     var green = $('#green-box');
//     if ($(this).scrollTop() > ($("#projects").offset().top + (30 / 100) * ph) && $(this).scrollTop() < ($('#contacts').offset().top + (30 / 100) * ch)) {
//         nav.addClass('green-bg');
//         green.addClass('full-opacity');
//     }
//     else {
//         nav.removeClass('green-bg');
//         green.removeClass('full-opacity');
//     };
// });

$(window).scroll(function () {
    var ui = $('#ui-ux-button');
    if ($(this).scrollTop() > ($("#designer").offset().top + 50)) {
        ui.addClass("animated fadeIn");
    };
});

$(window).scroll(function () {
    var dv = $('#dv-item');
    if ($(this).scrollTop() > ($("#designer").offset().top + 200)) {
        dv.addClass("animated fadeIn");
    };
});


$(window).scroll(function () {
    var dv = $('#dev-cont');
    if ($(this).scrollTop() > ($("#designer").offset().top + 300)) {
        dv.addClass("animated fadeIn");
    };
});