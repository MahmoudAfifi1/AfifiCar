/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


//  MENU SHOW 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN 
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/4
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){

    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click' , linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader(){
        const header = document.getElementById('header')
        //When the scroll is greater than 50 viewport height add the scroll-header class to the header tag 
        if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
/*=============== POPULAR SWIPER ===============*/
let swiperPopular =  new Swiper(".popular__container",{
    loop:true,
    spaceBetween:24,
    slidesPerView:'auto',
    grabCursor: true,
    pagination:{
        el:".swiper-pagination",
        dynamicBullets:true,
    },
    breakpoints:{
        768:{
            slidesPerView:3,
            spaceBetween:40,
        },
        1024:{
            spaceBetween:48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatures = mixitup('.featured__content',{
    selectors:{
        target:'.featured__card'
    },
    animation:{
        duration:300
    }
});

/* Link active featured */ 
const LinkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    LinkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
LinkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >=50) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelector('section[id')
function scrollActive(){
    const scrollY = window.pageYOFFset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href='+sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href='+sectionId +']').classList.remove("active-link")
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true
})

sr.reveal(`.home__title, .popular__container,.featured__filters`)
sr.reveal(`.home__subtitle`,{delay:500})
sr.reveal(`.home__elec`,{delay:600})
sr.reveal(`.home__img`,{delay:800})
sr.reveal(`.home__car-data`,{delay:900, interval:100,origin:'bottom'})
sr.reveal(`.home__button`,{delay:1000,origin:'bottom'})
sr.reveal(`.about__group, .offer__data`,{origin:'left'})
sr.reveal(`.about__data, .offer__img`,{origin:'right'})
sr.reveal(`.features__map`,{delay:600, origin:'bottom'})
sr.reveal(`.features__card`,{interval:300})
sr.reveal(`.featured__card , .logos__content, .footer__content`, {interval:100})