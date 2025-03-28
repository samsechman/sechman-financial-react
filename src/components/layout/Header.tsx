import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #004080;
    margin: 0;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-left: 25px;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 10px 0;
    transition: color 0.3s;
    
    &:hover, &.active {
      color: #007bff;
    }
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  cursor: pointer;
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: all 0.3s;
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  
  &:hover {
    background: #c82333;
  }
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };
  
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <Link to="/">
            <h1>Sechman Financial</h1>
          </Link>
        </Logo>
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/services">Services</Link>
            </NavItem>
            <NavItem>
              <Link to="/resources">Resources</Link>
            </NavItem>
            <NavItem>
              <Link to="/news">News</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
            {currentUser && (
              <NavItem>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </NavItem>
            )}
          </NavList>
        </Nav>
        <MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuBtn>
      </Container>
    </HeaderContainer>
  );
};

export default Header; 