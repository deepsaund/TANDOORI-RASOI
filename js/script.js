
// ====================================================== nav responsive start =====================================================================
var navLinks =document.getElementById("navbar-links");

function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px"
}
// ====================================================== nav responsive end =====================================================================









// ======================================================== swiper js start =============================================================================
const swiper = new Swiper('.swiper-container',{
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    spaceBetween:200,
    speed:1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
  
// ========================================================swiper js end =============================================================================






// ============================================= GSAP Animations with ScrollTrigger start ====================================================================
gsap.registerPlugin(ScrollTrigger);

// Fade-in sections on scroll
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        }
    });
});

// Hero Section Animation
gsap.from('.hero h2', {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: 'bounce',
});

gsap.from('.hero p', {
    duration: 1.5,
    delay: 0.5,
    opacity: 0,
    x: -50,
});

gsap.from('.btn', {
    duration: 1.5,
    delay: 1,
    opacity: 0,
    x: 50,
});

// ============================================= GSAP Animations with ScrollTrigger end ====================================================================
