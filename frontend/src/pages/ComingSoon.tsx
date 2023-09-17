import React from 'react';
import comingSoonImage from '../assets/coming-soon.jpeg';

const PlaceholderPage: React.FC = () => {
    return (
        <div>
            <h1>Coming Soon</h1>
            <img src={comingSoonImage} alt="Coming Soon" />
        </div>
    );
};

export default PlaceholderPage;