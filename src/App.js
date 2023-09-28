

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Home</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to BOOKAPP</h1>
      <p>Please <Link to="/login">login</Link> or <Link to="/register">register</Link></p>
    </div>
  );
}
export default App;
