import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuoteDisplay from './components/QuoteDisplay';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import UserQuotesPage from './pages/UserQuotesPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<QuoteDisplay />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/home/:username" element={<HomePage />} />
                <Route path="/:username" element={<UserQuotesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
