const headerFrame = document.querySelector('.header__frame')
const headerTitle = document.querySelector('.header__title-big')
const headerLogo = document.querySelector('.header__logo')
const headerTitleSmall = document.querySelector('.header__title-small')
const headerButton = document.querySelector('.header__button')
const headerImage = document.querySelector('.header__img')
const headerArrow = document.querySelector('.scroll')
const menuBtn = document.querySelectorAll('.menu__nav-btn')
const headerSocial = document.querySelector('.header__social-li')

//header animations

const headerTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

const animSpd = 0.65;

headerTl.fromTo(headerFrame, animSpd, { opacity: 0 }, { opacity: 1, delay: 1.2 })
    .fromTo(headerTitle, animSpd, { opacity: 0, x: '+=100' }, { opacity: 1, x: 0 })
    .fromTo(headerImage, 0.3, { opacity: 0, }, { opacity: 0.8, ease: "power1.out" })
    .fromTo(headerTitleSmall, animSpd, { opacity: 0, x: '-=100', },
        { x: 0, opacity: 1, x: 0, ease: "slow(0.7, 0.7, false)" })
    .fromTo(headerLogo, animSpd, { opacity: 0, x: '+=50' }, { opacity: 1, x: 0 })
    .fromTo(headerButton, animSpd, { opacity: 0, }, { opacity: 1, ease: "bounce.out" })

gsap.from(headerArrow, 2, { delay: 2, opacity: 0, })
gsap.from(headerArrow, 1.5, { delay: 0, y: '-20px', repeat: -1, yoyo: true, ease: "slow(0.7, 0.7, false)", });

gsap.fromTo(menuBtn, 2, {
    opacity: 0,
    y: '-=100',
    ease: "power3.out",
}, {
    opacity: 1,
    y: 0,
    delay: 3,

});

gsap.fromTo(headerSocial, 2, {
    opacity: 0,
    x: '-=100',
    ease: "power3.out",
}, {
    opacity: 1,
    x: 0,
    delay: 2.7,
    rotation: 360,
    transformOrigin: "center",
});
