// Toggle Image carousel for smaller width devices

const cover = document.querySelector('.banner-imgs');
let currItem = cover.children[1];
let n = cover.children.length;

function next()
{
  currItem.classList.remove('active');
  currItem.classList.add('hidden');

  if(currItem.nextElementSibling && currItem.nextElementSibling.tagName != "BUTTON")
      currItem = currItem.nextElementSibling;
  else
    currItem = cover.children[1];
  currItem.classList.remove("hidden");
  currItem.classList.add("active");
  updateDot(currItem.getAttribute('index'))
}

function prev() {
  currItem.classList.remove('active');
  currItem.classList.add('hidden');
  if(currItem.previousElementSibling && currItem.previousElementSibling.tagName != "BUTTON")
      currItem = currItem.previousElementSibling;
  else
      currItem = cover.children[n-2];
  currItem.classList.remove("hidden");
  currItem.classList.add("active");
  updateDot(currItem.getAttribute('index'));
}

function updateDot(index)
{
    const dot = document.querySelector(`span[index="${index}"]`);
    const prevDot = document.querySelector(`span[index="${((index-2+4)%4+1)}"]`);
    const nextDot = document.querySelector(`span[index="${(parseInt(index))%4+1}"]`);

    dot.setAttribute('style', 'background-color: hsla(86, 45%, 54%, 0.5); border-color: #000;');
   
    [prevDot, nextDot].forEach(dot => 
        dot.setAttribute('style', 'background-color: transparent; border-color: #00000077;')
    );


}

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click",()=> 
    {   clearInterval(intervalID);
        next();
        intervalID = setInterval(next, 2000);
        
    });

prevBtn.addEventListener("click", ()=>{
    clearInterval(intervalID);
    prev();
    intervalID = setInterval(next, 2400);

});


const circleBtns = document.querySelectorAll('.circle');

circleBtns.forEach(circBtn => {
    circBtn.addEventListener("click", ()=>{
        const btnIndex = circBtn.getAttribute('index');

        while(currItem.getAttribute('index') != btnIndex)
            next();
        clearInterval(intervalID);
        intervalID = setInterval(next, 2000);
    });
});


let intervalID;

const startCarousel = function initiate() {
    intervalID = setInterval(next, 2000);
};


function checkScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 992) {
    const container = document.querySelector(".banner-imgs");
    container.classList.add("banner-carousel");
    const elements = document.querySelectorAll(".banner-img-container");
    elements.forEach((element) => {
      element.classList.add("banner-carousel-frame");
    })
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
    startCarousel();
  }
 else
 {
  const elements = document.querySelectorAll(".banner-img-container");
  elements.forEach((element) => {
    element.classList.remove("banner-carousel-frame");
  const container = document.querySelector(".banner-imgs");
  container.classList.remove("banner-carousel");
  })
  
  const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }
 }
}
checkScreenSize();

window.addEventListener('resize', checkScreenSize);

const check= document.getElementById('postContent')
function GiveAlert() {
  if (check.value.trim() === '') {
      alert('Please enter a message.');
  } else {
      alert('Thank you for your feedback!');
  }
}