function init() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".last-text img",
        scroller:"#main",
        start: "top 60% center",
        end:"bottom 0% center",
        // markers: true,
        scrub:2
    }
})
tl.to(".last-text img", {
    y: -150,  
})
gsap.to(".second-last p" ,{
    // duration : 0.5,
    scrollTrigger:{
        trigger: ".second-last p",
        scroller:"#main",
        toggleClass: "drop-out",
        start: "0% 100%",
        end:"bottom 40%",
        // markers: true,
        scrub: 2
    }
})

