import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const RegistrationForm = ({ onRegistrationSuccess }) => {
    const { registerUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: "",
        uname: "",
        age: "",
        pass: ""
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        registerUser(formData);
        setFormData({
            name: "",
            uname: "",
            age: "",
            pass: ""
        });
        alert('User registered successfully!');
        onRegistrationSuccess(); // Call the callback to switch to the login form
    };

    return (
        <div align="center">
            <div className='form'>
                <input 
                    name="name"
                    type="text"
                    placeholder='Enter name'
                    value={formData.name}
                    onChange={handleFormChange}
                /><br/><br />
                <input 
                    name="uname"
                    type="text"
                    placeholder='Enter username'
                    value={formData.uname}
                    onChange={handleFormChange}
                /><br /><br />
                <input 
                    name="age"
                    type="number"
                    placeholder='Enter age'
                    value={formData.age}
                    onChange={handleFormChange}
                /><br /><br />
                <input 
                    name="pass"
                    type="password"
                    placeholder='Enter password'
                    value={formData.pass}
                    onChange={handleFormChange}
                /><br /><br />
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;