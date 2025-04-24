import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="Home-container">
            <div className="Home-image">
                <img src="/assets/banner1.jpg" alt="Restroom Finder Banner" />
            </div>

            <div className="Home-packages">
                {[...Array(5)].map((_, i) => (
                    <div className="Home-packages-item" key={i}>
                        <h3>Feature {i + 1}</h3>
                        <p>Short description of this feature.</p>
                    </div>
                ))}
            </div>

            <div className="Home-image">
                <img src="/assets/banner2.jpg" alt="Another Banner" />
            </div>
        </div>
    );
}

export default Home;
