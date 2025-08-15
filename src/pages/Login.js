import React, {use, useState} from 'react';
import api from '../api/axios';
import { setToken } from '../auth';
import { useNavigate } from "react-router-dom";
import '../styles/main.css';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({email:'',password:''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            const res = await api.post('/auth/login', form);
            setToken(res.data.token);
            navigate('/');
        }
        catch(err){
            setError(err.response?.data?.message || 'Login failed');
        }
    };
    return(
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit = {handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p> }
            </form>
            <p>Don't have an account? <span className="link" onClick={() => navigate('/register')}>Register</span> </p>
        </div>
    );
}
export default Login;