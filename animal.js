import imageCategories from './assets/js/ImageData.js';

function displayImages(category) {
  const gallery = document.querySelector('.gallery'); // Assuming .gallery div
  gallery.innerHTML = ''; // Clear existing images

  if (imageCategories[category]) {
    imageCategories[category].forEach((url) => {
      const img = document.createElement('img');
      img.className="image"
      img.src = url;
      img.alt = category;
      img.style.width = '100%';
      gallery.appendChild(img);
    });
  } else {
    gallery.innerHTML = `<p>No images found for ${category}</p>`;
  }
}

// Get the category from the URL parameters
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// Display the images based on the category
if (category) {
  displayImages(category);
} else {
  console.error('No category specified');
}

