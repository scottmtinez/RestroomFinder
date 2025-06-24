import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    const features = [
        { title: "Easy Search", description: "Quickly locate the nearest restroom with live data." },
        { title: "Cleanliness Ratings", description: "Check user-submitted cleanliness scores." },
        { title: "Accessibility Info", description: "Know which restrooms are wheelchair accessible." },
        { title: "Open Hours", description: "Avoid closed facilities with live hours tracking." },
        { title: "Add New Spots", description: "Contribute new restrooms to the map easily." }
    ];

    return (
        <div className="home-container">
            {/* Hero Banner */}
            <section className="home-banner">
                <img className="home-image"src="https://technopolis-group.com/wp-content/uploads/2021/05/ICC-COvid.jpeg" alt="Restroom Finder Banner" />
                <div className='home-location-pin-icon'><i class="bi bi-geo-alt-fill"></i></div>
                <div className="home-banner-text">
                    <h1>Find Clean & Nearby Restrooms</h1>
                    <p>Your go-to tool for public restroom navigation and cleanliness info.</p>
                </div>
            </section>

            {/* Features Section */}
            <section className="home-features">
                {features.map((feature, index) => (
                    <div className="home-feature-item" key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Secondary Banner */}
            <section className="home-banner">
                <img src="/assets/banner2.jpg" alt="Map Feature Banner" />
                <div className="home-banner-text">
                    <h2>Map View Integration</h2>
                    <p>Explore our interactive map to locate restrooms in real-time.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
