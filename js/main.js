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
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// });

// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });




// gallery start 

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    // List of 10 different image URLs (update this with your actual image URLs)
    const imageUrls = [
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/zik8qfbwcc7fuxo5fdcz',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/p56cxfezqqtiiqh4sxxv',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/eb4qckjsa0kcykjtndfq',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/bwgnnhhsdsalwb1vbi8e',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/sykemld9cduvlq5uknut',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/dwstoqfdx4hitcavrx52',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/yjifbh391a1smridzorw',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/brxel0jd01xpmrl2aw7a',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/hw8smlvmcgysbdgectiy',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/fpctoaok3bjwq2pv04vl',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/iu0frykamnprxehum38z',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/kjpoxifyklu8q7vdojxa',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/rqaxofomr6yrroqlhjz8',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/zkcaovad1kpjii8glsm3',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/gw2quusuwiarlrh9bi3a',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/yomu1jj0tfrjlzzg6lmh',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/zbh5gxywdl1jnclvysof',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/uvq8c8xtenzujcg77mre',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/mbv9zgngiqxqzn6ock35',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/cthdr1c0scq3pqqedoki',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/ovmfnxggnqbbmxerefsb',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/qys24qgunz1xcoyv9w3u',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/rkszuvo9zbenlsxjkasl',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/kulgrpn9cttuoxvv8aou',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/ogdp61pna6sk1eqw1sea',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/agsciyompozzsawqlflb',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/vqqpgntoiuknnntakrhl',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/ffvxap4wimvz7gx2yxfq',
        'https://res.cloudinary.com/dsig0ikjq/image/upload/f_auto,q_auto/v1/iplcm/lxtnvze3kl7puyn50vrv',
    ];

    for (let i = 0; i < imageUrls.length; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 col-12 gallery-item';

        const img = document.createElement('img');
        img.src = imageUrls[i]; // Use the corresponding image URL
        img.alt = `Gallery Image ${i + 1}`; // Unique alt text
        img.className = 'img-fluid';

        // Add click event listener to open the modal
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modal.show();
        });

        col.appendChild(img);
        gallery.appendChild(col);
    }
});

// gallery end


// blog start 

const blogPosts = [
    {
        id: 1,
        title: "Introduction to HTML",
        excerpt: "Learn the basics of HTML and start building your first webpage.",
        content: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page."
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        excerpt: "Discover how to style your HTML with CSS and create beautiful designs.",
        content: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts."
    },
    {
        id: 3,
        title: "JavaScript Essentials",
        excerpt: "Explore the power of JavaScript and add interactivity to your websites.",
        content: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, most notably servers and a variety of applications."
    }
];

function createBlogPost(post) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
        <div class="card blog-card h-100" data-id="${post.id}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.excerpt}</p>
            </div>
        </div>
    `;
    return col;
}

function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blogPosts');
    blogPosts.forEach(post => {
        blogPostsContainer.appendChild(createBlogPost(post));
    });
}

function openDrawer(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        document.getElementById('drawerTitle').textContent = post.title;
        document.getElementById('drawerContent').textContent = post.content;
        document.getElementById('drawer').classList.add('open');
    }
}

function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();

    document.getElementById('blogPosts').addEventListener('click', (e) => {
        const card = e.target.closest('.blog-card');
        if (card) {
            const postId = parseInt(card.dataset.id);
            openDrawer(postId);
        }
    });

    document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
});

// blog end