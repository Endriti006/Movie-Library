// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import HomePage from "../src/Components/HomePage";
import MovieForm from "./Components/MovieForm";

const App = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={isAuthenticated ? <Navigate to="/protected" /> : <Navigate to="/login" />} 
                />
                <Route 
                    path="/login" 
                    element={isAuthenticated ? <Navigate to="/protected" /> : <LoginForm />} 
                />
                <Route
                    path="/protected"
                    element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route 
                    path="/add-movie" 
                    element={isAuthenticated ? <MovieForm /> : <Navigate to="/login" />} 
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
