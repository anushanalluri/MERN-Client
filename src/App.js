import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    const [users, setUsers] = useState([]);

    const handleRegister = (newUser) => {
        setUsers([...users, newUser]);
    };

    const handleLogin = (loggedInUser) => {
        console.log('Login successful!', loggedInUser);
        // Add logic here for further actions after successful login
    };

    return (
        <div className="App">
            <Register onRegister={handleRegister} />
            <Login users={users} onLogin={handleLogin} />
        </div>
    );
}

export default App;
