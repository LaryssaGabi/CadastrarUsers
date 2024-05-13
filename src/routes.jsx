import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home/App'
import Users from './page/users/Users'

export default function RoutesTelas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    );
}
