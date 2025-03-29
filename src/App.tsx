import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import News from './pages/News';
import Contact from './pages/Contact';

// Global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #004080;
    --secondary-color: #007bff;
    --dark-color: #333;
    --light-color: #f4f4f4;
    --danger-color: #dc3545;
    --success-color: #28a745;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
  }

  img {
    max-width: 100%;
  }
`;

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route 
              path="/" 
              element={
                <Layout>
                  <Home />
                </Layout>
              } 
            />
            <Route 
              path="/about" 
              element={
                <Layout>
                  <About />
                </Layout>
              } 
            />
            <Route 
              path="/services" 
              element={
                <Layout>
                  <Services />
                </Layout>
              } 
            />
            <Route 
              path="/resources" 
              element={
                <Layout>
                  <Resources />
                </Layout>
              } 
            />
            <Route 
              path="/news" 
              element={
                <Layout>
                  <News />
                </Layout>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Layout>
                  <Contact />
                </Layout>
              } 
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App; 