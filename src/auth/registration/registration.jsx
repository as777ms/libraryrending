import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./../login/login.css"; // Reusing the same CSS as in the Login component

const Registration = () => {
    const [formData, setFormData] = useState({
        userName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError('');

        if (Object.values(formData).some(field => !field)) {
            setError('All fields are required');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_LOGIN_URL_}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                navigate('/login');
            } else {
                setError('Registration failed');
            }
        } catch (err) {
            if (err.response) {
                console.error('Registration error:', err.response.data);
                setError('Registration failed: ' + JSON.stringify(err.response.data));
            } else {
                console.error('Error:', err.message);
                setError('An error occurred: ' + err.message);
            }
        }
    };

    return (
        <div className='bgimgLogin'>
            <h1 className='' style={{ color: "rgb(92, 166, 255)" }}>Create an Account</h1>
            <form onSubmit={handleRegistration}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={formData.userName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
