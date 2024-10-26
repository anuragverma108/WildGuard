document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Default view over India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const parkIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
        iconSize: [38, 38],
        iconAnchor: [22, 38],
        popupAnchor: [-3, -38]
    });

    const nationalParks = [
        {
            name: "Corbett National Park",
            location: { lat: 29.5521551, lng: 78.8832107 },
            species: [
                { species: "Bengal Tiger", population: 200 },
                { species: "Elephant", population: 350 },
                { species: "Leopard", population: 70 },
                { species: "Sambar Deer", population: 1000 },
                { species: "Sloth Bear", population: 50 }
            ]
        },
        {
            name: "Kanha National Park",
            location: { lat: 22.4279, lng: 80.3888 },
            species: [
                { species: "Bengal Tiger", population: 80 },
                { species: "Barasingha (Swamp Deer)", population: 600 },
                { species: "Indian Wild Dog (Dhole)", population: 120 },
                { species: "Leopard", population: 60 },
                { species: "Indian Gaur", population: 800 }
            ]
        },
        {
            name: "Tadoba National Park",
            location: { lat: 20.2167, lng: 79.3075 },
            species: [
                { species: "Bengal Tiger", population: 70 },
                { species: "Leopard", population: 40 },
                { species: "Sambar Deer", population: 600 },
                { species: "Indian Bison", population: 250 },
                { species: "Wild Boar", population: 500 }
            ]
        },
        {
            name: "Madhav National Park",
            location: { lat: 24.1740, lng: 77.2631 },
            species: [
                { species: "Leopard", population: 30 },
                { species: "Sambar Deer", population: 200 },
                { species: "Chital", population: 300 },
                { species: "Nilgai", population: 150 },
                { species: "Indian Wolf", population: 15 }
            ]
        },
        {
            name: "Bandhavgarh National Park",
            location: { lat: 23.6340, lng: 80.7925 },
            species: [
                { species: "Bengal Tiger", population: 60 },
                { species: "Indian Leopard", population: 30 },
                { species: "Sambar Deer", population: 800 },
                { species: "Indian Wolf", population: 15 },
                { species: "Wild Boar", population: 400 }
            ]
        },
        {
            name: "Kaziranga National Park",
            location: { lat: 26.5775, lng: 93.1711 },
            species: [
                { species: "One-Horned Rhino", population: 2600 },
                { species: "Elephant", population: 1200 },
                { species: "Water Buffalo", population: 1500 },
                { species: "Bengal Tiger", population: 110 },
                { species: "Swamp Deer", population: 800 }
            ]
        },
        {
            name: "Bandipur National Park",
            location: { lat: 11.6462, lng: 76.5169 },
            species: [
                { species: "Bengal Tiger", population: 40 },
                { species: "Indian Elephant", population: 1200 },
                { species: "Indian Bison", population: 800 },
                { species: "Leopard", population: 50 },
                { species: "Sambar Deer", population: 400 }
            ]
        },
        {
            name: "Bannerghatta National Park",
            location: { lat: 12.7287, lng: 77.6153 },
            species: [
                { species: "Bengal Tiger", population: 30 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 200 },
                { species: "Spotted Deer", population: 1000 },
                { species: "Indian Bison", population: 150 }
            ]
        },
        {
            name: "Gir National Park",
            location: { lat: 21.1266, lng: 70.7923 },
            species: [
                { species: "Asiatic Lion", population: 600 },
                { species: "Indian Leopard", population: 300 },
                { species: "Sambar Deer", population: 400 },
                { species: "Spotted Deer", population: 1200 },
                { species: "Four-Horned Antelope", population: 100 }
            ]
        },
        {
            name: "Gugamal National Park",
            location: { lat: 21.3845, lng: 78.8282 },
            species: [
                { species: "Bengal Tiger", population: 60 },
                { species: "Leopard", population: 40 },
                { species: "Indian Bison", population: 200 },
                { species: "Sambar Deer", population: 350 },
                { species: "Wild Boar", population: 100 }
            ]
        },
        {
            name: "Navegaon National Park",
            location: { lat: 21.0715, lng: 79.4155 },
            species: [
                { species: "Bengal Tiger", population: 20 },
                { species: "Leopard", population: 25 },
                { species: "Sambar Deer", population: 200 },
                { species: "Indian Bison", population: 150 },
                { species: "Wild Boar", population: 100 }
            ]
        },
        {
            name: "Pench National Park",
            location: { lat: 22.0356, lng: 78.6348 },
            species: [
                { species: "Bengal Tiger", population: 50 },
                { species: "Leopard", population: 60 },
                { species: "Indian Wild Dog (Dhole)", population: 120 },
                { species: "Sambar Deer", population: 300 },
                { species: "Chital (Spotted Deer)", population: 800 }
            ]
        },
        {
            name: "Blackbuck National Park",
            location: { lat: 22.7111, lng: 70.3592 },
            species: [
                { species: "Blackbuck", population: 2000 },
                { species: "Chital", population: 300 },
                { species: "Nilgai", population: 150 },
                { species: "Wild Boar", population: 100 },
                { species: "Fox", population: 50 }
            ]
        },
        {
            name: "Guindy National Park",
            location: { lat: 13.0026, lng: 80.2266 },
            species: [
                { species: "Blackbuck", population: 200 },
                { species: "Indian Palm Squirrel", population: 100 },
                { species: "Bonnet Macaque", population: 80 },
                { species: "Spotted Deer", population: 150 },
                { species: "Mongoose", population: 40 }
            ]
        },
        {
            name: "Keibul-Lamjao National Park",
            location: { lat: 24.6607, lng: 93.8821 },
            species: [
                { species: "Sangai (Dancing Deer)", population: 200 },
                { species: "Indian Elephant", population: 150 },
                { species: "Bengal Tiger", population: 20 },
                { species: "Wild Boar", population: 100 },
                { species: "Chital", population: 300 }
            ]
        },
        {
            name: "Khangchendzonga National Park",
            location: { lat: 27.2894, lng: 88.6340 },
            species: [
                { species: "Snow Leopard", population: 30 },
                { species: "Blue Sheep", population: 300 },
                { species: "Musk Deer", population: 50 },
                { species: "Himalayan Monal", population: 200 },
                { species: "Himalayan Black Bear", population: 20 }
            ]
        },
        {
            name: "Dudhwa National Park",
            location: { lat: 27.7088, lng: 80.5477 },
            species: [
                { species: "Tiger", population: 70 },
                { species: "Indian Rhinoceros", population: 35 },
                { species: "Swamp Deer", population: 600 },
                { species: "Elephant", population: 300 },
                { species: "Leopard", population: 25 }
            ]
        },
        {
            name: "Eravikulam National Park",
            location: { lat: 10.0864, lng: 77.1852 },
            species: [
                { species: "Nilgiri Tahr", population: 200 },
                { species: "Barking Deer", population: 100 },
                { species: "Asian Elephant", population: 150 },
                { species: "Malabar Grey Hornbill", population: 200 },
                { species: "Sambar Deer", population: 300 }
            ]
        },
        {
            name: "Vansda National Park",
            location: { lat: 20.5245, lng: 73.2442 },
            species: [
                { species: "Barking Deer", population: 80 },
                { species: "Indian Flying Fox", population: 150 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 150 },
                { species: "Indian Bison", population: 60 }
            ]
        },
        {
            name: "Van Vihar National Park",
            location: { lat: 23.2042, lng: 77.5053 },
            species: [
                { species: "Bengal Tiger", population: 15 },
                { species: "Leopard", population: 20 },
                { species: "Indian Gaur", population: 100 },
                { species: "Sambar Deer", population: 100 },
                { species: "Nilgai", population: 50 }
            ]
        },
        {
            name: "Simlipal National Park",
            location: { lat: 21.6128, lng: 86.4637 },
            species: [
                { species: "Bengal Tiger", population: 50 },
                { species: "Indian Elephant", population: 100 },
                { species: "Sambar Deer", population: 300 },
                { species: "Wild Boar", population: 150 },
                { species: "Indian Gaur", population: 200 }
            ]
        },
        {
            name: "Ranthambore National Park",
            location: { lat: 26.0173, lng: 76.5026 },
            species: [
                { species: "Bengal Tiger", population: 75 },
                { species: "Indian Leopard", population: 20 },
                { species: "Sambar Deer", population: 600 },
                { species: "Chital", population: 1200 },
                { species: "Indian Bison", population: 150 }
            ]
        },
        {
            name: "Gulf of Mannar Marine National Park",
            location: { lat: 9.2745, lng: 78.7100 },
            species: [
                { species: "Dugong", population: 50 },
                { species: "Green Sea Turtle", population: 200 },
                { species: "Hawksbill Turtle", population: 100 },
                { species: "Coral Species", population: 500 },
                { species: "Crab Species", population: 300 }
            ]
        },
        {
            name: "Guru Ghasidas (Sanjay) National Park",
            location: { lat: 23.5115, lng: 81.6062 },
            species: [
                { species: "Bengal Tiger", population: 30 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 300 },
                { species: "Chital", population: 600 },
                { species: "Indian Bison", population: 100 }
            ]
        },
        {
            name: "Dachigam National Park",
            location: { lat: 34.0861, lng: 74.7547 },
            species: [
                { species: "Hangul (Kashmir Stag)", population: 150 },
                { species: "Barking Deer", population: 80 },
                { species: "Leopard", population: 25 },
                { species: "Black Bear", population: 20 },
                { species: "Himalayan Black Bear", population: 10 }
            ]
        },
        {
            name: "Hemis National Park",
            location: { lat: 33.4878, lng: 78.4206 },
            species: [
                { species: "Snow Leopard", population: 200 },
                { species: "Blue Sheep", population: 300 },
                { species: "Himalayan Ibex", population: 150 },
                { species: "Red Fox", population: 100 },
                { species: "Common Marmot", population: 80 }
            ]
        },
        {
            name: "Kishtwar National Park",
            location: { lat: 33.2536, lng: 75.9312 },
            species: [
                { species: "Snow Leopard", population: 50 },
                { species: "Himalayan Black Bear", population: 20 },
                { species: "Musk Deer", population: 30 },
                { species: "Himalayan Ibex", population: 80 },
                { species: "Red Fox", population: 40 }
            ]
        },
        {
            name: "Panna National Park",
            location: { lat: 24.6740, lng: 80.0764 },
            species: [
                { species: "Bengal Tiger", population: 25 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 300 },
                { species: "Chital", population: 500 },
                { species: "Wild Boar", population: 100 }
            ]
        },
        {
            name: "Sanjay National Park",
            location: { lat: 24.7275, lng: 80.1619 },
            species: [
                { species: "Bengal Tiger", population: 20 },
                { species: "Leopard", population: 15 },
                { species: "Sambar Deer", population: 200 },
                { species: "Chital", population: 350 },
                { species: "Indian Wolf", population: 10 }
            ]
        },
        {
            name: "Satpura National Park",
            location: { lat: 22.4220, lng: 78.4156 },
            species: [
                { species: "Bengal Tiger", population: 40 },
                { species: "Indian Bison", population: 500 },
                { species: "Sambar Deer", population: 200 },
                { species: "Chital", population: 400 },
                { species: "Leopard", population: 30 }
            ]
        },
        {
            name: "Keoladeo Ghana National Park",
            location: { lat: 27.1965, lng: 77.4237 },
            species: [
                { species: "Brahminy Duck", population: 50 },
                { species: "Black-tailed Godwit", population: 1000 },
                { species: "Sarus Crane", population: 100 },
                { species: "Great Egret", population: 200 },
                { species: "Indian Pond Heron", population: 150 }
            ]
        },
        {
            name: "Indravati National Park",
            location: { lat: 19.1942, lng: 81.6651 },
            species: [
                { species: "Bengal Tiger", population: 25 },
                { species: "Leopard", population: 15 },
                { species: "Indian Bison", population: 200 },
                { species: "Wild Boar", population: 150 },
                { species: "Chital", population: 300 }
            ]
        },
        {
            name: "Kanger Valley National Park",
            location: { lat: 19.2704, lng: 81.6920 },
            species: [
                { species: "Bengal Tiger", population: 20 },
                { species: "Indian Bison", population: 100 },
                { species: "Chital", population: 150 },
                { species: "Leopard", population: 10 },
                { species: "Wild Boar", population: 80 }
            ]
        },
        {
            name: "Marine National Park",
            location: { lat: 20.4512, lng: 68.5780 },
            species: [
                { species: "Dugong", population: 50 },
                { species: "Green Sea Turtle", population: 200 },
                { species: "Hawksbill Turtle", population: 100 },
                { species: "Coral Species", population: 500 },
                { species: "Sea Urchin", population: 300 }
            ]
        },
        {
            name: "Periyar National Park",
            location: { lat: 9.5659, lng: 77.0792 },
            species: [
                { species: "Indian Elephant", population: 1500 },
                { species: "Bengal Tiger", population: 50 },
                { species: "Nilgai", population: 80 },
                { species: "Malabar Grey Hornbill", population: 200 },
                { species: "Sambar Deer", population: 300 }
            ]
        },
        {
            name: "Nanda Devi National Park",
            location: { lat: 30.3868, lng: 79.5518 },
            species: [
                { species: "Snow Leopard", population: 30 },
                { species: "Himalayan Black Bear", population: 20 },
                { species: "Musk Deer", population: 50 },
                { species: "Blue Sheep", population: 300 },
                { species: "Himalayan Ibex", population: 80 }
            ]
        },
        {
            name: "Valley of Flowers National Park",
            location: { lat: 30.1900, lng: 79.7313 },
            species: [
                { species: "Snow Leopard", population: 20 },
                { species: "Musk Deer", population: 50 },
                { species: "Himalayan Blue Sheep", population: 100 },
                { species: "Himalayan Ibex", population: 60 },
                { species: "Red Fox", population: 40 }
            ]
        },
        {
            name: "Mahatma Gandhi Marine National Park",
            location: { lat: 13.0078, lng: 92.9537 },
            species: [
                { species: "Dugong", population: 20 },
                { species: "Coral Species", population: 300 },
                { species: "Green Sea Turtle", population: 150 },
                { species: "Hawksbill Turtle", population: 100 },
                { species: "Crab Species", population: 200 }
            ]
        },
        {
            name: "Namdapha National Park",
            location: { lat: 27.2300, lng: 95.0867 },
            species: [
                { species: "Bengal Tiger", population: 30 },
                { species: "Leopard", population: 25 },
                { species: "Himalayan Black Bear", population: 15 },
                { species: "Himalayan Black Deer", population: 20 },
                { species: "Himalayan Black Bear", population: 10 }
            ]
        },
        {
            name: "Fossil National Park",
            location: { lat: 23.1384, lng: 80.1646 },
            species: [
                { species: "Bengal Tiger", population: 20 },
                { species: "Indian Bison", population: 100 },
                { species: "Sambar Deer", population: 200 },
                { species: "Chital", population: 150 },
                { species: "Wild Boar", population: 50 }
            ]
        },
        {
            name: "Sanjay Gandhi National Park",
            location: { lat: 19.1772, lng: 72.8872 },
            species: [
                { species: "Bengal Tiger", population: 30 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 200 },
                { species: "Chital", population: 300 },
                { species: "Indian Bison", population: 50 }
            ]
        },
        {
            name: "Rajaji National Park",
            location: { lat: 30.1850, lng: 78.1892 },
            species: [
                { species: "Bengal Tiger", population: 40 },
                { species: "Indian Elephant", population: 100 },
                { species: "Sambar Deer", population: 200 },
                { species: "Indian Bison", population: 150 },
                { species: "Chital", population: 300 }
            ]
        },
        {
            name: "Great Himalayan National Park",
            location: { lat: 32.0614, lng: 77.5175 },
            species: [
                { species: "Snow Leopard", population: 50 },
                { species: "Blue Sheep", population: 300 },
                { species: "Himalayan Ibex", population: 80 },
                { species: "Musk Deer", population: 40 },
                { species: "Red Fox", population: 30 }
            ]
        },
        {
            name: "Silent Valley National Park",
            location: { lat: 11.1565, lng: 76.5695 },
            species: [
                { species: "Lion-tailed Macaque", population: 300 },
                { species: "Nilgiri Tahr", population: 50 },
                { species: "Malabar Grey Hornbill", population: 100 },
                { species: "Barking Deer", population: 80 },
                { species: "Indian Elephant", population: 100 }
            ]
        },
        {
            name: "Sunderban National Park",
            location: { lat: 21.9798, lng: 88.8400 },
            species: [
                { species: "Bengal Tiger", population: 300 },
                { species: "Saltwater Crocodile", population: 150 },
                { species: "Spotted Deer", population: 500 },
                { species: "Gharial", population: 50 },
                { species: "Olive Ridley Turtle", population: 200 }
            ]
        },
        {
            name: "Balpakram National Park",
            location: { lat: 25.4866, lng: 91.5507 },
            species: [
                { species: "Barking Deer", population: 80 },
                { species: "Leopard", population: 20 },
                { species: "Sambar Deer", population: 150 },
                { species: "Indian Bison", population: 60 },
                { species: "Golden Cat", population: 10 }
            ]
        },
        {
            name: "Mouling National Park",
            location: { lat: 28.1561, lng: 94.7006 },
            species: [
                { species: "Snow Leopard", population: 40 },
                { species: "Black Bear", population: 20 },
                { species: "Barking Deer", population: 80 },
                { species: "Wild Boar", population: 60 },
                { species: "Himalayan Blue Sheep", population: 50 }
            ]
        },
        {
            name: "Betla National Park",
            location: { lat: 23.7132, lng: 84.1843 },
            species: [
                { species: "Bengal Tiger", population: 30 },
                { species: "Indian Elephant", population: 50 },
                { species: "Sambar Deer", population: 150 },
                { species: "Chital", population: 400 },
                { species: "Indian Wolf", population: 20 }
            ]
        },
        {
            name: "Nokrek Ridge National Park",
            location: { lat: 25.3168, lng: 90.3530 },
            species: [
                { species: "Barking Deer", population: 50 },
                { species: "Indian Bison", population: 100 },
                { species: "Leopard", population: 10 },
                { species: "Golden Cat", population: 5 },
                { species: "Red Panda", population: 15 }
            ]
        },
        {
            name: "Neora Valley National Park",
            location: { lat: 27.0272, lng: 88.7942 },
            species: [
                { species: "Red Panda", population: 20 },
                { species: "Leopard", population: 15 },
                { species: "Barking Deer", population: 80 },
                { species: "Musk Deer", population: 25 },
                { species: "Himalayan Black Bear", population: 10 }
            ]
        },
        {
            name: "Singalila National Park",
            location: { lat: 27.0646, lng: 88.8594 },
            species: [
                { species: "Red Panda", population: 15 },
                { species: "Barking Deer", population: 30 },
                { species: "Himalayan Black Bear", population: 20 },
                { species: "Musk Deer", population: 20 },
                { species: "Snow Leopard", population: 5 }
            ]
        },
        {
            name: "Middle Button Island National Park",
            location: { lat: 10.4004, lng: 92.7494 },
            species: [
                { species: "Dugong", population: 10 },
                { species: "Green Sea Turtle", population: 50 },
                { species: "Hawksbill Turtle", population: 20 },
                { species: "Coral Species", population: 100 },
                { species: "Crab Species", population: 30 }
            ]
        },
        {
            name: "Mount Harriet National Park",
            location: { lat: 11.6137, lng: 92.4967 },
            species: [
                { species: "Barking Deer", population: 50 },
                { species: "Nilgai", population: 20 },
                { species: "Leopard", population: 15 },
                { species: "Sambar Deer", population: 60 },
                { species: "Indian Bison", population: 30 }
            ]
        },
        {
            name: "North Button Island National Park",
            location: { lat: 10.3478, lng: 92.7595 },
            species: [
                { species: "Dugong", population: 10 },
                { species: "Green Sea Turtle", population: 20 },
                { species: "Coral Species", population: 80 },
                { species: "Crab Species", population: 30 },
                { species: "Sea Urchin", population: 50 }
            ]
        },
        {
            name: "Saddle Peak National Park",
            location: { lat: 13.1643, lng: 92.8898 },
            species: [
                { species: "Barking Deer", population: 40 },
                { species: "Indian Bison", population: 50 },
                { species: "Leopard", population: 20 },
                { species: "Indian Elephant", population: 30 },
                { species: "Red Panda", population: 10 }
            ]
        },
        {
            name: "South Button Island National Park",
            location: { lat: 10.4010, lng: 92.7385 },
            species: [
                { species: "Dugong", population: 5 },
                { species: "Green Sea Turtle", population: 10 },
                { species: "Coral Species", population: 50 },
                { species: "Crab Species", population: 20 },
                { species: "Sea Urchin", population: 30 }
            ]
        }
    ];
    
    

    const addParkMarker = (park) => {
        const marker = L.marker([park.location.lat, park.location.lng], { icon: parkIcon }).addTo(map);
        const speciesDetails = park.species.map(s => `${s.species}: ${s.population}`).join("<br>");
        
        marker.on('click', () => {
            const popupContent = `
                <div style="width: 200px; padding: 10px; background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 8px;">
                    <h3 style="margin-top: 0;">${park.name}</h3>
                    <p><strong>Species Found and their population:</strong><br>${speciesDetails}</p>
                </div>
            `;
            marker.bindPopup(popupContent).openPopup();
        });
    };

    nationalParks.forEach(park => addParkMarker(park));

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showUserLocation, handleLocationError);
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleLocationError = (error) => {
        let errorMessage = "An unknown error occurred.";
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get your location timed out.";
                break;
        }
        alert(errorMessage);
    };

    const showUserLocation = (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        map.setView([lat, lng], 13);

        const userIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
            iconSize: [38, 38],
            iconAnchor: [22, 38],
            popupAnchor: [-3, -38]
        });

        L.marker([lat, lng], { icon: userIcon }).addTo(map).bindPopup("You are here").openPopup();
    };

    getUserLocation();
});
