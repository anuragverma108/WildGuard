document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map with a default view
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Default view over India

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Helper function to add a marker
    const addMarker = (lat, lng, label, customIcon = null) => {
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(label);
        return marker;
    };

    // Custom icon for markers
    const parkIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png', // Custom icon URL
        iconSize: [38, 38], // Size of the icon
        iconAnchor: [22, 38], // Anchor point of the icon
        popupAnchor: [-3, -38] // Where the popup opens relative to the icon
    });

    // Define national parks with their coordinates
    const nationalParks = [
        { name: "Corbett National Park", lat: 29.5521551, lng: 78.8832107 },
        { name: "Kanha National Park", lat: 22.4279, lng: 80.3888 },
        { name: "Tadoba National Park", lat: 20.2167, lng: 79.3075 },
        { name: "Madhav National Park", lat: 24.1740, lng: 77.2631 },
        { name: "Bandhavgarh National Park", lat: 23.6340, lng: 80.7925 },
        { name: "Kaziranga National Park", lat: 26.5775, lng: 93.1711 },
        { name: "Bandipur National Park", lat: 11.6462, lng: 76.5169 },
        { name: "Bannerghatta National Park", lat: 12.7287, lng: 77.6153 },
        { name: "Gir National Park", lat: 21.1266, lng: 70.7923 },
        { name: "Gugamal National Park", lat: 21.3845, lng: 78.8282 },
        { name: "Navegaon National Park", lat: 21.0715, lng: 79.4155 },
        { name: "Pench National Park", lat: 22.0356, lng: 78.6348 },
        { name: "Blackbuck National Park", lat: 22.7111, lng: 70.3592 },
        { name: "Guindy National Park", lat: 13.0026, lng: 80.2266 },
        { name: "Keibul-Lamjao National Park", lat: 24.6607, lng: 93.8821 },
        { name: "Khangchendzonga National Park", lat: 27.2894, lng: 88.6340 },
        { name: "Dudhwa National Park", lat: 27.7088, lng: 80.5477 },
        { name: "Eravikulam National Park", lat: 10.0864, lng: 77.1852 },
        { name: "Vansda National Park", lat: 20.5245, lng: 73.2442 },
        { name: "Van Vihar National Park", lat: 23.2042, lng: 77.5053 },
        { name: "Simlipal National Park", lat: 21.6128, lng: 86.4637 },
        { name: "Ranthambore National Park", lat: 26.0173, lng: 76.5026 },
        { name: "Gulf of Mannar Marine National Park", lat: 9.2745, lng: 78.7100 },
        { name: "Guru Ghasidas (Sanjay) National Park", lat: 23.5115, lng: 81.6062 },
        { name: "Dachigam National Park", lat: 34.0861, lng: 74.7547 },
        { name: "Hemis National Park", lat: 33.4878, lng: 78.4206 },
        { name: "Kishtwar National Park", lat: 33.2536, lng: 75.9312 },
        { name: "Panna National Park", lat: 24.6740, lng: 80.0764 },
        { name: "Sanjay National Park", lat: 24.7275, lng: 80.1619 },
        { name: "Satpura National Park", lat: 22.4220, lng: 78.4156 },
        { name: "Keoladeo Ghana National Park", lat: 27.1965, lng: 77.4237 },
        { name: "Indravati National Park", lat: 19.1942, lng: 81.6651 },
        { name: "Kanger Valley National Park", lat: 19.2704, lng: 81.6920 },
        { name: "Marine National Park", lat: 20.4512, lng: 68.5780 },
        { name: "Periyar National Park", lat: 9.5659, lng: 77.0792 },
        { name: "Nanda Devi National Park", lat: 30.3868, lng: 79.5518 },
        { name: "Valley of Flowers National Park", lat: 30.1900, lng: 79.7313 },
        { name: "Mahatma Gandhi Marine National Park", lat: 13.0078, lng: 92.9537 },
        { name: "Namdapha National Park", lat: 27.2300, lng: 95.0867 },
        { name: "Fossil National Park", lat: 23.1384, lng: 80.1646 },
        { name: "Sanjay Gandhi National Park", lat: 19.1772, lng: 72.8872 },
        { name: "Rajaji National Park", lat: 30.1850, lng: 78.1892 },
        { name: "Great Himalayan National Park", lat: 32.0614, lng: 77.5175 },
        { name: "Silent Valley National Park", lat: 11.1565, lng: 76.5695 },
        { name: "Sunderban National Park", lat: 21.9798, lng: 88.8400 },
        { name: "Balpakram National Park", lat: 25.4866, lng: 91.5507 },
        { name: "Mouling National Park", lat: 28.1561, lng: 94.7006 },
        { name: "Betla National Park", lat: 23.7132, lng: 84.1843 },
        { name: "Nokrek Ridge National Park", lat: 25.3168, lng: 90.3530 },
        { name: "Neora Valley National Park", lat: 27.0272, lng: 88.7942 },
        { name: "Singalila National Park", lat: 27.0646, lng: 88.8594 },
        { name: "Middle Button Island National Park", lat: 10.4004, lng: 92.7494 },
        { name: "Mount Harriet National Park", lat: 11.6137, lng: 92.4967 },
        { name: "North Button Island National Park", lat: 10.3478, lng: 92.7595 },
        { name: "Saddle Peak National Park", lat: 13.1643, lng: 92.8898 },
        { name: "South Button Island National Park", lat: 10.3538, lng: 92.8393 },
        { name: "Pin Valley National Park", lat: 32.0760, lng: 78.7153 },
        { name: "Anshi National Park", lat: 14.8557, lng: 74.5847 },
        { name: "Kudremukh National Park", lat: 13.1417, lng: 75.8970 },
        { name: "Nagarahole (Rajiv Gandhi) National Park", lat: 11.5978, lng: 76.4474 },
        { name: "Bhitarkanika National Park", lat: 20.3733, lng: 86.8577 },
        { name: "Sri Venkateswara National Park", lat: 13.6345, lng: 79.5171 },
        { name: "Valmiki National Park", lat: 27.2473, lng: 84.0679 },
        { name: "Sultan National Park", lat: 28.1948, lng: 76.9539 },
        { name: "Indira Gandhi (Annamalai) National Park", lat: 9.1650, lng: 77.5869 },
        { name: "Gangotri National Park", lat: 30.9844, lng: 79.0794 },
        { name: "Manas National Park", lat: 26.5232, lng: 90.4354 },
        { name: "Mudumalai National Park", lat: 11.5357, lng: 76.6572 },
        { name: "Mukurthi National Park", lat: 11.5326, lng: 76.5875 },
        { name: "Govind National Park", lat: 30.7631, lng: 78.4743 },
        { name: "Murlen National Park", lat: 23.2576, lng: 92.6492 },
        { name: "Campbell Bay National Park", lat: 6.8550, lng: 93.6734 },
        { name: "Galathea Bay National Park", lat: 13.3700, lng: 92.9177 },
        { name: "Mollem National Park", lat: 15.3702, lng: 74.1904 },
        { name: "City Forest (Salim Ali) National Park", lat: 34.1515, lng: 74.2687 },
        { name: "Phawngpui Blue Mountain National Park", lat: 22.3978, lng: 93.0280 },
        { name: "Desert National Park", lat: 26.4571, lng: 70.0222 },
        { name: "Sariska National Park", lat: 27.0307, lng: 76.2869 },
        { name: "Buxa National Park", lat: 26.9487, lng: 89.1196 },
        { name: "Gorumara National Park", lat: 26.9254, lng: 88.7278 },
        { name: "Intanki National Park", lat: 26.1761, lng: 93.7262 },
        { name: "Kasu Brahmananda Reddy National Park", lat: 17.4175, lng: 78.4675 },
        { name: "Mahaveer Harina Vanasthali National Park", lat: 17.3868, lng: 78.4080 },
        { name: "Mrugavani National Park", lat: 17.3668, lng: 78.5200 },
        { name: "Rani Jhansi Marine National Park", lat: 10.3415, lng: 92.7050 },
        { name: "Nameri National Park", lat: 26.9567, lng: 93.5882 },
        { name: "Dibru-Saikhowa National Park", lat: 27.4457, lng: 95.5544 },
        { name: "Rajiv Gandhi Orang National Park", lat: 26.6282, lng: 93.4220 },
        { name: "Kalesar National Park", lat: 30.3361, lng: 77.1540 },
        { name: "Anamudi Shola National Park", lat: 10.1222, lng: 77.0654 },
        { name: "Mathikettan Shola National Park", lat: 10.0320, lng: 77.1611 },
        { name: "Pampadum Shola National Park", lat: 10.0504, lng: 77.0342 },
        { name: "Chandoli National Park", lat: 16.6728, lng: 73.9311 },
        { name: "Rajiv Gandhi (Rameswaram) National Park", lat: 9.2474, lng: 78.6282 },
        { name: "Mukundra Hills National Park", lat: 24.5968, lng: 75.7495 },
        { name: "Clouded Leopard National Park", lat: 23.8105, lng: 91.1614 },
        { name: "Bison National Park", lat: 23.8311, lng: 91.3775 },
        { name: "Papikonda National Park", lat: 17.2011, lng: 81.4712 },
        { name: "Inderkilla National Park", lat: 32.3658, lng: 77.3258 },
        { name: "Khirganga National Park", lat: 32.1162, lng: 77.2334 },
        { name: "Simbalbara National Park", lat: 30.9166, lng: 77.2514 },
        { name: "Jaldapara National Park", lat: 26.6483, lng: 89.0266 },
    ];

    // Loop through the parks and add them to the map
    nationalParks.forEach(park => {
        addMarker(park.lat, park.lng, park.name, parkIcon);
    });

    // Center the map to show all markers
    map.setView([20.5937, 78.9629], 5); // Adjust as necessary

    // Get and display the user's current location
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showUserLocation, handleLocationError);
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    // Error handler for geolocation
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

    // Show user's location on the map
    const showUserLocation = (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Center the map on the user's location
        map.setView([lat, lng], 13);

        // Add a custom icon for the user's location
        const userIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', // Custom icon
            iconSize: [38, 38],
            iconAnchor: [22, 38],
            popupAnchor: [-3, -38]
        });

        // Add marker for the user's location
        addMarker(lat, lng, "You are here", userIcon);
    };

    // Get user's location when the page loads
    getUserLocation();
});
