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
                <Route path="/login" element={<LoginForm />} />
                <Route
                    path="/protected"
                    element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to="/protected" />} />
                <Route path="/add-movie" element={<MovieForm />} />
            </Routes>
        </Router>
    );
};

export default App;
