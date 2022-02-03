const tl1 = gsap.timeline();
const tl2 = gsap.timeline({
    paused: "true",
    reversed: "true"
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