import React , { useState } from 'react';
import api from '../api/axios';
import { useNavigate} from "react-router-dom";
import '../styles/main.css';
import {use} from "react";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name:'', email:'', password:''});
    const[error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try{
            await api.post('/auth/register', form);
            setSuccess('Registration successful! You can now log in.');
            setTimeout(() => navigate('/login'), 1500);
        }catch(err){
            setError(err.response?.data?.message || 'Registration failed');
        }
    };
    return(
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
                <button type="submit">Regsiter</button>
                {error && <p className="error">{error}</p> }
                {success && <p className="success">{success}</p> }
            </form>
            <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span> </p>
        </div>
    );
};
export default Register;