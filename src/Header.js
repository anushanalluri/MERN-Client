import React from 'react';
import '../style.css';

function Header() {
    return (
        <div className="header">
            <h3>Flipcart</h3>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
    );
}

export default Header;
