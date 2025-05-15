import React from 'react';
import './Account.css';

function Account() {
    return (
        <div className="account-container">
            {/* Page Header */}
            <header className="account-header">
                <h1>Your Account</h1>
                <p>Manage your profile and preferences.</p>
            </header>

            {/* Profile Section */}
            <div className="account-content">
                <div className="account-card">
                    <h2>Profile Information</h2>
                    <form className="account-form">
                        <label>
                            Full Name
                            <input type="text" name="name" defaultValue="John Doe" />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" defaultValue="john@example.com" />
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" placeholder="••••••••" />
                        </label>
                        <button type="submit">Update Profile</button>
                    </form>
                </div>

                {/* Preferences or Actions */}
                <div className="account-card">
                    <h2>Preferences</h2>
                    <p>You can customize app notifications and visibility settings.</p>
                    <button className="danger-button">Delete Account</button>
                </div>
            </div>
        </div>
    );
}

export default Account;
