import React from 'react';
import   { AuthContext } from '../../contexts/UserContext';
import { useContext } from 'react';

const About = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            <h2>Secrect about us </h2>
            <p>{user?.email}</p>
            
        </div>
    );
};

export default About;