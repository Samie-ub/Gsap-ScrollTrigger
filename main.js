import './style.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);


gsap.to("#first-page",{
  scrollTrigger:{
    trigger:'#second-page',
    scroller:'body',
    start:'top 80%',
    end:'bottom 10%',
    scrub:true
  },
  x:"-100%",
  y:'-20%'
})
gsap.to("#second-page",{
  scrollTrigger:{
    trigger:'#second-page',
    scroller:'body',
    start:'top 10%',
    end:'bottom 10%',
    scrub:true,
    ease: "power1.inOut",
  },
  x:"100%",
  y:'-20%',
  borderRadius:'1rem',
  backgroundColor:"#A94438"
})
gsap.to("#second-page h1",{
  scrollTrigger:{
    trigger:'#second-page',
    scroller:'body',
    start:'top 10%',
    end:'bottom 10%',
    scrub:true,
    ease: "power1.inOut",
  },
 opacity:0
})
gsap.to("#third-page",{
  scrollTrigger:{
    trigger:'#third-page',
    scroller:'body',
    start:'top 10%',
    end:'bottom 10%',
    scrub:1
  },
  x:"100%",
  y:'-20%',
  rotate:180
})
gsap.to("#fourth-page",{
  scrollTrigger:{
    trigger:'#fourth-page',
    scroller:'body',
    start:'top 10%',
    end:'bottom 10%',
    scrub:1,
  },
  scale:1.6,


})

var tl = gsap.timeline({repeatDelay: 1});
tl.fromTo("#first-page h1", {x: -100, duration: 1},{x: 0, duration: 1});
tl.fromTo("#second-page h1", {x: -100, duration: 1},{x: 0, duration: 1});
