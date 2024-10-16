# WildGuard

WildGuard is a web application designed to track and monitor wildlife activities, providing insights and alerts for wildlife enthusiasts, researchers, and conservationists. This website aims to improve awareness of wildlife behaviors and support conservation efforts by offering real-time data, tracking, and various interactive features.

## Features

- **Real-time Wildlife Tracking**: Monitor wildlife in real time using live data from tracking devices.
- **Interactive Map**: Visualize wildlife movement patterns on a dynamic, interactive map.
- **Alerts and Notifications**: Receive custom alerts on wildlife activity based on location and species.
- **Data Insights**: Analyze data trends with charts and graphs to understand wildlife behavior over time.
- **User Profiles**: Create and manage user profiles for personalized experiences and tracking data.
- **Conservation News and Updates**: Stay informed with the latest conservation news and projects.

## Technologies Used

- **Frontend**: React, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express, MongoDB
- **API Integration**: Google Maps API, Wildlife tracking APIs
- **Authentication**: JWT-based authentication
- **Hosting**: Vercel (frontend) and Railway (backend)

## Installation

### Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/wildguard-backend.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd wildguard-backend
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and set up the environment variables:
   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   PORT=your_port
   ```
5. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/wildguard-frontend.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd wildguard-frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the environment:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```
5. Start the frontend server:
   ```bash
   npm run start
   ```

## Usage

Once both frontend and backend servers are running, you can access the WildGuard website by navigating to `http://localhost:3000` in your web browser. 

- **Sign up or log in** to access your personalized dashboard.
- Use the **wildlife tracking map** to monitor activity in specific regions.
- Set up **notifications** for updates about specific animals or areas.
- Explore **wildlife data** with the built-in analytics tools.

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push the changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
