import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            {/* Page Header */}
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>Have a question, suggestion, or issue? We'd love to hear from you.</p>
            </header>

            {/* Contact Content */}
            <div className="contact-content">
                {/* Contact Form */}
                <form className="contact-form">
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Your full name" required />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" placeholder="you@example.com" required />
                    </label>
                    <label>
                        Message
                        <textarea name="message" rows="6" placeholder="Write your message..." required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Our Info</h3>
                    <p>Email: support@restroomfinder.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Location: 123 Public Way, Anywhere, USA</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
