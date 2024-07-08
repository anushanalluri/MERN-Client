import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    // Function to register a new user
    const registerUser = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    // Function to login a user
    const loginUser = (username, password) => {
        return users.find(user => user.uname === username && user.pass === password);
    };

    return (
        <UserContext.Provider value={{ users, registerUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};