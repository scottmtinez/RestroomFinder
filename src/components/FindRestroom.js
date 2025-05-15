import React from 'react';
import './FindRestroom.css';

function FindRestroom() {
    return (
        <div className="findrestroom-container">
            {/* Page Header */}
            <header className="findrestroom-header">
                <h1>Find Nearby Restrooms</h1>
                <p>Use the map below to locate clean, public restrooms near you.</p>
            </header>

            {/* Search Bar */}
            <div className="findrestroom-search">
                <input
                    type="text"
                    placeholder="Enter a location or allow GPS"
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>

            {/* Map Placeholder */}
            <div className="findrestroom-map">
                {/* You can later integrate Google Maps, Mapbox, or Leaflet here */}
                <div className="map-placeholder">
                    <p>Map will appear here.</p>
                </div>
            </div>
        </div>
    );
}

export default FindRestroom;
