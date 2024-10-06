Shery.imageEffect("#back", {style:5, config:{"a":{"value":1.98,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1793214862681745},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.78,"range":[1,15]},"durationOut":{"value":0.1,"range":[0.1,5]},"durationIn":{"value":1.52,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.66,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":8.26,"range":[0,100]}},gooey: true});
// all the javascript code related to shery.js

var firstnames = document.querySelectorAll(".firstname");
firstnames.forEach(function(firstname){
    var h1s=firstname.querySelectorAll("h1");
var index=0;
var animating=false;
document.querySelector("#main")
.addEventListener("click", function(){
    if(!animating){
        animating= true;
        gsap.to(h1s[index],{
        top:'-=100%',
        duration:0.5,
        ease: Expo.easeInOut,
            onComplete: function(){
    gsap.set(this._targets[0], {top: '100%'});
    animating=false;
},
           
});
}
index == h1s.length-1 ? (index=0):index++;
    gsap.to(h1s[index],{
    top:'-=100%',
    duration:0.5,
    ease: Expo.easeInOut,
});
});
});
var typed = new Typed(".home",{
    strings: ["1. Protect Habitats", "2. Combat Poaching", "3. Reduce Pollution","4. Promote Sustainable Practices", "5. Educate Communities", "6. Support Conservation Efforts", "7. Advocate for Wildlife", "8. Fundraise for Wildlife", "9. Volunteer for Wildlife", "10. Spread Awareness"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
var typed = new Typed(".greet",{
    strings: ["Sea Otter" , "Javan Rhinos", "Amur Leopard", "Amur Leopard", "Tapanuli Orangutan ", "Yangtze Finless Porpoise", "Black Rhinos", "African Forest Elephant", "Sumatran Orangutan","Hawksbill Turtles"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



   
  
    