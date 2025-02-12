'use strict';

document.querySelectorAll('.carousel-container').forEach(carouselContainer => {
    const leftBtn = carouselContainer.querySelector('.carousel-btn.left');
    const rightBtn = carouselContainer.querySelector('.carousel-btn.right');
    const carouselItems = Array.from(carouselContainer.querySelectorAll('.carousel-item'));
    const navItems = Array.from(carouselContainer.querySelectorAll('.nav-item'));
    const CAROUSEL_SIZE = carouselItems.length;
    let autoScrollInterval;

    startAutoScroll();

    leftBtn.addEventListener('click', () => {
        swipeLeft();
        resetAutoScroll();
    });

    rightBtn.addEventListener('click', () => {
        swipeRight();
        resetAutoScroll();
    });

    carouselContainer.querySelector('.carousel-nav').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-item')) {
            const index = navItems.indexOf(e.target);
            if (e.target.classList.contains('active')) return;
            updateActiveItem(index);
            resetAutoScroll();
        }
    });

    function swipeLeft() {
        const currentIndex = getCurrentIndex();
        const nextIndex = currentIndex === 0 ? CAROUSEL_SIZE - 1 : currentIndex - 1;
        updateActiveItem(nextIndex);
    }

    function swipeRight() {
        const currentIndex = getCurrentIndex();
        const nextIndex = currentIndex === CAROUSEL_SIZE - 1 ? 0 : currentIndex + 1;
        updateActiveItem(nextIndex);
    }

    function getCurrentIndex() {
        return carouselItems.findIndex(item => item.classList.contains('active'));
    }

    function updateActiveItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        navItems.forEach(dot => dot.classList.remove('active'));

        carouselItems[index].classList.add('active');
        navItems[index].classList.add('active');
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(swipeRight, 5000);
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
});

// Query the button by its ID
const fetchButton = document.querySelector('#fetchPlacesButton');

// Add an event listener for fetching data
fetchButton.addEventListener('click', () => {
    // Overpass API endpoint with a query for restaurants in Charlotte, NC
    const overpassAPI = 'https://overpass-api.de/api/interpreter';

    // Overpass query: Fetch restaurants in Charlotte
    const query = `
        [out:json][timeout:25];
        area[name="Charlotte"]->.searchArea;
        node[amenity=restaurant](area.searchArea);
        out body 10;
    `;

    // Fetch data from Overpass API
    fetch(overpassAPI, {
        method: 'POST',
        body: query,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        const placesDiv = document.querySelector('#placesList');
        placesDiv.innerHTML = '<h3>Restaurants in Charlotte:</h3>';
        
        if (data.elements && data.elements.length > 0) {
            data.elements.forEach(place => {
                placesDiv.innerHTML += `<p><strong>${place.tags.name || 'Unnamed'}</strong>: Outdoor Seating:  ${place?.tags?.outdoor_seating || "Not specified"}, ${place?.lon}</p>`;
            });
        } else {
            placesDiv.innerHTML += '<p>No data available.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.querySelector('#placesList').innerHTML = '<p style="color: red;">Failed to fetch data.</p>';
    });
});

