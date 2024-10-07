<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Carousel</title>
  <style>
    /* Add any necessary CSS for the carousel and buttons */
    .hidden { display: none; }
    .active { display: block; }
    .banner-carousel-frame { /* Styling for carousel elements */ }
  </style>
</head>
<body>

<!-- Carousel HTML -->
<div class="banner-imgs">
  <!-- Add your images inside the div -->
  <button class="prev-btn">Previous</button>
  <div class="banner-img-container"></div>
  <button class="next-btn">Next</button>
</div>
<div class="carousel-indicators">
  <span class="circle" index="1"></span>
  <span class="circle" index="2"></span>
  <span class="circle" index="3"></span>
  <span class="circle" index="4"></span>
</div>

<script>
  const cover = document.querySelector('.banner-imgs');
  let currItem = cover.children[1];  // The currently active image
  let n = cover.children.length;

  // Swipe detection for touch devices
  let startX = 0;

  cover.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  cover.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) next();
      else prev();
    }
  });

  function next() {
    currItem.classList.remove('active');
    currItem.classList.add('hidden');
    currItem = currItem.nextElementSibling && currItem.nextElementSibling.tagName !== "BUTTON"
      ? currItem.nextElementSibling
      : cover.children[1];
    currItem.classList.remove('hidden');
    currItem.classList.add('active');
    updateDot(currItem.getAttribute('index'));
  }

  function prev() {
    currItem.classList.remove('active');
    currItem.classList.add('hidden');
    currItem = currItem.previousElementSibling && currItem.previousElementSibling.tagName !== "BUTTON"
      ? currItem.previousElementSibling
      : cover.children[n - 2];
    currItem.classList.remove('hidden');
    currItem.classList.add('active');
    updateDot(currItem.getAttribute('index'));
  }

  function updateDot(index) {
    const dot = document.querySelector(`span[index="${index}"]`);
    const prevDot = document.querySelector(`span[index="${((index - 2 + n) % n) + 1}"]`);
    const nextDot = document.querySelector(`span[index="${(parseInt(index)) % n + 1}"]`);

    dot.setAttribute('style', 'background-color: hsla(86, 45%, 54%, 0.5); border-color: #000;');
    [prevDot, nextDot].forEach(dot => dot.setAttribute('style', 'background-color: transparent; border-color: #00000077;'));
  }

  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    next();
    intervalID = setInterval(next, 2000);
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    prev();
    intervalID = setInterval(next, 2400);
  });

  const circleBtns = document.querySelectorAll('.circle');

  circleBtns.forEach(circBtn => {
    circBtn.addEventListener('click', () => {
      const btnIndex = circBtn.getAttribute('index');

      while (currItem.getAttribute('index') !== btnIndex) {
        next();
      }
      clearInterval(intervalID);
      intervalID = setInterval(next, 2000);
    });
  });

  // Pause carousel when hovering over the images
  cover.addEventListener('mouseenter', () => clearInterval(intervalID));
  cover.addEventListener('mouseleave', () => intervalID = setInterval(next, 2000));

  let intervalID;

  const startCarousel = () => {
    intervalID = setInterval(next, 2000);
  };

  // Optimize interval clearing
  function clearAllIntervals() {
    const highestIntervalId = window.setInterval(() => {}, 0);
    for (let i = 1; i <= highestIntervalId; i++) {
      window.clearInterval(i);
    }
  }

  function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 992) {
      const container = document.querySelector('.banner-imgs');
      container.classList.add('banner-carousel');
      const elements = document.querySelectorAll('.banner-img-container');
      elements.forEach(element => element.classList.add('banner-carousel-frame'));
      
      clearAllIntervals();
      startCarousel();
    } else {
      const container = document.querySelector('.banner-imgs');
      container.classList.remove('banner-carousel');
      const elements = document.querySelectorAll('.banner-img-container');
      elements.forEach(element => element.classList.remove('banner-carousel-frame'));

      clearAllIntervals();
    }
  }

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
</script>

</body>
</html>
