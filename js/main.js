(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 150, 'easeInOutExpo');
        return false;
    });

    // Instagram button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.instaBtn').fadeIn('slow');
    }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



})(jQuery);

const form = document.querySelector("form");

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {

const bodyMessage = `Name: ${fullname.value}<br> Email: ${email.value}<br> Message: ${message.value}`

    Email.send({
        SecureToken : "9202c93d-d1ad-42a7-b20c-27b1231cdba6",
        Host : "smtp.elasticemail.com",
        Username : "ttugce74@gmail.com",
        Password : "88D1484D9305109002EAF78191D7D8844149",
        To : 'ttugce74@gmail.com',
        From : "ttugce74@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => { if(message == "OK") {
        Swal.fire({
            title: "Başarılı!",
            text: "Mesaj gönderildi!",
            icon: "success"
          });
      }
        
      });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
