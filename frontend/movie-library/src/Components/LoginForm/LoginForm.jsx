import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });

    const handleTogglePassword = (field) => {
        setShowPassword((prevState) => ({ ...prevState, [field]: !prevState[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const toggleForm = () => {
        setIsRegister((prevIsRegister) => {
            setFormData({ username: "", password: "", confirmPassword: "" });
            setShowPassword({ password: false, confirmPassword: false });
            return !prevIsRegister;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isRegister) {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            localStorage.setItem('user', JSON.stringify({ username: formData.username, password: formData.password }));
            alert("Registration successful! Check your email for a verification link.");
            setFormData({ username: "", password: "", confirmPassword: "" });
        } else {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
                alert("You are logged in!");
            } else {
                alert("Invalid username or password.");
            }
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>{isRegister ? "Register" : "Login"}</h1>
                <div className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword.password ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <FaLock className="icon" />
                    <div className="icons" onClick={() => handleTogglePassword('password')}>
                        {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
                {isRegister && (
                    <div className="input-box">
                        <input
                            type={showPassword.confirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className="icon" />
                        <div className="icons" onClick={() => handleTogglePassword('confirmPassword')}>
                            {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                )}
                <button type="submit">{isRegister ? "Register" : "Login"}</button>
                <div className="register-link">
                    <p>{isRegister ? "Already have an account?" : "Don't have an account?"}
                        <a href="#" onClick={toggleForm}>{isRegister ? "Login" : "Register"}</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
