// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import ProtectedPage from "../src/Components/ProtectedPage";

const App = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route
                    path="/protected"
                    element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
