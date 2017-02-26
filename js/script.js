var contactform = $('#contactform');
contactform.attr('action', '//formspree.io/' + 'ralexclark' + '@' + 'ralexclark' + '.' + 'ca');

$('.anchor-scroll').bind('click', function(e) {

    //Set variables for the anchors href, and the html and body.
    var href = $(this).attr('href');
    var html_body = $('html,body');

    html_body.stop().animate({
        scrollTop: ($(href).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    e.preventDefault();
});

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
            url: '//formspree.io/ralexclark@ralexclark.ca',
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
                toastr.error('Ops, there was an error.');
            }

        });

        this.reset();
    } else {
        toastr.error('Please Enter a valid email, name and comment.');
    }


});
