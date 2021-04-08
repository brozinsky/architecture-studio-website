<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollToPlugin.min.js"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CSSRulePlugin3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


// nav bar scroll
$(document).ready(function () {
    $(window).scroll(function (event) {
        const y = $(this).scrollTop();
        if (y >= 10) {
            $('.menu__bcg').addClass('menu__bcg--transparent').removeClass('menu__bcg--solid');
            $('.menu').addClass('menu--transparent').removeClass('menu--solid');
        } else {
            $('.menu__bcg').removeClass('menu__bcg--transparent').addClass('menu__bcg--solid');
            $('.menu').removeClass('menu--transparent').addClass('menu--solid');
        }
    })
})




// PROJECTS

const projectsSection = document.querySelector('.projects')


gsap.fromTo(projectsSection, {
    y: '+=150',
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: projectsSection,
        start: 'top 60%',
    }
});



//? Other animations

// // HEADER

// var rule = CSSRulePlugin.getRule(".header__frame-bcg:after");
// gsap.fromTo(rule, {
//     cssRule: {
//         left: -200
//     },
//     opacity: 0,
// }, {
//     cssRule: {
//         left: 0
//     },
//     opacity: 1,
//     duration: 2,
//     scrollTrigger: {
//         trigger: '.header',
//         start: 'top 60%',
//     },
//     delay: 3,
// });

// // PROJECTS

// gsap.fromTo('.projects', {
//     y: '+=150',
//     opacity: 0
// }, {
//     y: 0,
//     opacity: 1,
//     stagger: 0.2,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.projects',
//         start: 'top 60%',
//     }
// });

// // MAP
// gsap.set('.map__pin', {
//     transformOrigin: "center 100%",
// });
// gsap.from('.map__pin', 2.5, {
//     scrollTrigger: {
//         trigger: '.map',
//         start: "20px 30%",
//         end: "bottom 20%",
//         toggleActions: 'restart none reverse none',
//     },
//     y: '-30rem',
//     ease: "bounce.out",
// });


// //Scroll

// document.querySelectorAll(".menu__nav-btn").forEach((navBtn, index) => {
//     navBtn.addEventListener("click", () => {

//         gsap.to(window, {
//             duration: 1,
//             scrollTo: {
//                 y: "#section" + (index + 1),
//                 offsetY: 70
//             }
//         });
//     });
// });