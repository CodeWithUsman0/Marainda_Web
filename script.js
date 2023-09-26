const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0.1,
    delay:0.1
})
.to("#page1",{
    y:"40vh",
    duration:1
})
.to("#page1",{
    y:0,
    duration:1,
    scale:1,
    rotate:360
})
