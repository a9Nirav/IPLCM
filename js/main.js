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
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);




// for logo swip

document.addEventListener("DOMContentLoaded", function() {
    const sliderTrack = document.querySelector(".slide-track");
    const slides = Array.from(document.querySelectorAll(".slide1"));
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    
    // Duplicate slides
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
    
    let position = 0;
    
    function startScroll() {
        position -= 1; // Adjust speed by changing this value
        if (position <= -slideWidth * totalSlides) {
            position = 0; // Reset position when the first set ends
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(startScroll);
    }

    // Start the infinite scroll
    startScroll();
});



// document.addEventListener("DOMContentLoaded", function() {
//     const sliderTrack = document.querySelector(".slide-track");
//     const slides = Array.from(document.querySelectorAll(".slide1"));
//     const totalSlides = slides.length;
//     const slideWidth = slides[0].offsetWidth; // Each slide's width (250px)
    
//     let position = 0;
    
//     function startScroll() {
//         position -= 1; // Controls the scroll speed (increase or decrease this value to control speed)
        
//         // If we reach the end of the slides, instantly reset position to the start
//         if (position <= -(slideWidth * totalSlides)) {
//             position = 0;
//         }
        
//         // Apply the transformation to the slider track
//         sliderTrack.style.transform = `translateX(${position}px)`;
        
//         // Request the next animation frame to continuously scroll
//         requestAnimationFrame(startScroll);
//     }
    
//     // Start the scrolling effect
//     startScroll();
// });




// topbar type write
// const text = "INTERNATIONAL PRIVATE LABEL AND CONTRACT MANUFACTURING EXPO";
// let index = 0;

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typewriter-text").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 100); // Adjust delay for typing speed
//     }
// }

// typeWriter();








// text animation 
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//   mouse animation 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});