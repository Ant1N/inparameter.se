const tl1 = gsap.timeline();
const tl2 = gsap.timeline({
    paused: "true",
    reversed: "true"
})
const pop = gsap.timeline({
    paused: "true"
})

// tl1 animations 
tl1.from(".logo, .menu", {
    duration: .4,
    delay: .5,
    opacity: 0,
    y: 10
})
tl1.from(".container-row h1, .container-row h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: {
        amount: .4
    }
})
tl1.from(".container-row img", {
    duration: 1,
    x: -600,
    y: -600,
    opacity: 0,
    stagger: {
        amount: .4
    }
},"-=1.2")
tl1.from(".contact-page",{
    duration: 1,
    opacity: 0,
    y:"-100%",
    stagger: {
        amount: 1
    }
});
// tl2 animations 
tl2.to(".container-row h1, .container-row h2", {
    duration: .3,
    y: 50,
    opacity: 0,
    stagger: {
        amount: .2
    }
})
tl2.to(".container-row img", {
    duration: 0.6,
    x: -600,
    y: -600,
    opacity: 0,
    stagger: {
        amount: .2
    }
},"-=.5")
tl2.to(".menu-container", {
    y: 0,
    duration: .3,
    opacity: 1
})
tl2.from(".menu-items li, .social-items li", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: {
        amount: .2
    }
})

function menu(){
    tl2.reversed() ? tl2.play() : tl2.reverse();
}

pop.to(".popup-template", {
    duration: .8,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Power4.easeOut
})
pop.from(".popup-top, .form-row1 h1, .form-row1 input, .form-row1 textarea, .submit-popup", {
    duration: .5,
    opacity: 0,
    y: 15,
    stagger: {
        amount: .4
    }
},"-=.3")

function open_pop(){
    pop.play();
}
function close_pop(){
    pop.reverse();
}