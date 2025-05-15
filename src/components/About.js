import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>About Restroom Finder</h1>
                <p>Helping you find the cleanest, closest, and most accessible restrooms — anytime, anywhere.</p>
            </section>

            {/* Mission Statement */}
            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    We aim to make public restroom access stress-free and reliable for everyone. Whether you're traveling,
                    living with a disability, or simply need a clean facility nearby, we provide real-time information,
                    user reviews, and accessible mapping.
                </p>
            </section>

            {/* Key Features / Values */}
            <section className="about-features">
                <div className="about-feature-item">
                    <h3>Community Driven</h3>
                    <p>All restroom info is crowdsourced and regularly updated by users like you.</p>
                </div>
                <div className="about-feature-item">
                    <h3>Cleanliness Focused</h3>
                    <p>See cleanliness ratings and report poor conditions instantly.</p>
                </div>
                <div className="about-feature-item">
                    <h3>Accessibility Matters</h3>
                    <p>We highlight wheelchair-accessible facilities and gender-neutral options.</p>
                </div>
            </section>

            {/* Team Section (optional) */}
            <section className="about-team">
                <h2>Meet the Team</h2>
                <p>We're a passionate group of developers, designers, and travelers committed to solving a universal need.</p>
                {/* Add team member cards here if needed */}
            </section>
        </div>
    );
}

export default About;
