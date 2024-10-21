document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results') || createSearchResultsContainer();

    if (!searchForm || !searchInput) {
        console.error('Search form or input not found');
        return;
    }

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        console.log('Searching for:', searchTerm);
        if (searchTerm) {
            const results = performSearch(searchTerm);
            displaySearchResults(results, searchResults);
        }
    });
});

function performSearch(searchTerm) {
    console.log('Performing search for:', searchTerm);
    if (!window.searchIndex) {
        console.error('searchIndex is not defined');
        return [];
    }
    return window.searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function displaySearchResults(results, container) {
    console.log('Displaying results:', results);
    container.innerHTML = '<h2>Search Results</h2>';
    if (results.length === 0) {
        container.innerHTML += '<p style="color: #fff;">No results found.</p>';
    } else {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.url;
            a.textContent = result.title;
            if (result.url.includes('#')) {
                a.onclick = function(e) {
                  e.preventDefault();
                  const targetId = result.url.split('#')[1];
                  scrollToSection(targetId);
                };
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
    container.style.display = 'block';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Section not found:', sectionId);
    }
  }


function createSearchResultsContainer() {
    const container = document.createElement('div');
    container.id = 'search-results';
    document.body.appendChild(container);
    return container;
}

// Close search results when clicking outside
document.addEventListener('click', function(event) {
    const searchResults = document.getElementById('search-results');
    const searchForm = document.getElementById('search-form');
    if (searchResults && !searchResults.contains(event.target) && !searchForm.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });