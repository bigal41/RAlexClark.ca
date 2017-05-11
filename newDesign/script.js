var contactform = $('#contactform');
contactform.attr('action', '//formspree.io/' + 'ralexclark' + '@' + 'ralexclark' + '.' + 'ca');

$('.anchor-scroll').on('click', function(e) {

    //Set variables for the anchors href, and the html and body.
    var href = $(this).attr('href');
    var html_body = $('html,body');

    html_body.stop().animate({
        scrollTop: ($(href).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    e.preventDefault();
});

//Create Sticky Nav
var toggleAffix = function(affixEl, scrollEl, wrapper) {
    var height = affixEl.outerHeight(),
        top = wrapper.offset().top;

    if (scrollEl.scrollTop() >= top) {
        wrapper.height(height);
        affixEl.addClass("fixed-top");
        $('#brand-name').removeClass("hiddenBrand").addClass("shownBrand").fadeIn(1000);
    } else {
        affixEl.removeClass("fixed-top");
        wrapper.height('auto');
        $('#brand-name').removeClass("shownBrand").addClass("hiddenBrand").fadeIn(1000);
    }
};

$('.navbar li').click(function(e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});

var aChildren = $("#mainNav li").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i = 0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
} // this for loop fills the aArray with attribute href values

$(window).scroll(function() {
    var windowPos = $(window).scrollTop()+85; // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i = 0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top; // get the offset of the div from the top of page
        var divHeight = $(theID).height() + Number($(theID).css('padding-bottom').replace('px','')) + + Number($(theID).css('padding-top').replace('px','')); // get the height of the div in question
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").addClass("active");
        } else {
            $("a[href='" + theID + "']").removeClass("active");
        }
    }

    if (windowPos + windowHeight >= docHeight) {
        if (!$("nav li:last-child a").hasClass("active")) {
            var navActiveCurrent = $(".nav-active").attr("href");
            $("a[href='" + navActiveCurrent + "']").removeClass("active");
            $("nav li:last-child a").addClass("active");
        }
    }
});

$('[data-toggle="affix"]').each(function() {
    var el = $(this),
        wrapper = $('<div></div>');

    el.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(el, $(this), wrapper);
    });

    // init
    toggleAffix(el, $(window), wrapper);

})

$(window).on('resize', function() {
    $('#wrapper').css('height', $(window).height() - 85);
});

$('#wrapper').css('height', $(window).height() - 85);

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//For any wow class, grab the height of the object and set the wow offset to it.
//This makes it so the object has to be fully on the page first.
$('.wow').each(function() {
    var wowHeight = $(this).height();
    $(this).attr('data-wow-offset', wowHeight);
});

//Initialize WOW js library
var wow = new WOW({
    mobile: true
});

wow.init();

//Toastr Options
toastr.options = {
    "newestOnTop": true,
    "preventDuplicates": false,
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

//Contact Form - Formspree AJAX Call
var contactform = $('#contactform');

contactform.submit(function(e) {

    e.preventDefault();

    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var name = /^([a-zA-Z\s]+)$/gi

    if (re.test($('#contactEmail').val()) && name.test($('#contactName').val()) && $('#contactMessage').val().length > 0) {
        $.ajax({
            url: '//formspree.io/ralexclark@outlook.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                toastr.info('Sending Message...');
            },
            success: function(data) {
                toastr.success('Thanks for the email, will be in touch promptly.');
            },
            error: function(err) {
                toastr.error('Oops, there was an error.');
            }

        });

        this.reset();
    } else {
        toastr.error('Please Enter a valid email, name and comment.');
    }


});
