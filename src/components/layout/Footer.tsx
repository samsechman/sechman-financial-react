import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #003366;
  color: #fff;
  padding: 60px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogo = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    color: #ccc;
    margin-bottom: 20px;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLinksColumn = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #fff;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  p {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLogo>
            <h2>Sechman Financial</h2>
            <p>Your Financial Partner for Life</p>
          </FooterLogo>
          <FooterLinks>
            <FooterLinksColumn>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </FooterLinksColumn>
            <FooterLinksColumn>
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Investment Management</Link></li>
                <li><Link to="/services">Retirement Planning</Link></li>
                <li><Link to="/services">Estate Planning</Link></li>
                <li><Link to="/services">Tax Planning</Link></li>
              </ul>
            </FooterLinksColumn>
            <FooterLinksColumn>
              <h3>Legal</h3>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/disclaimer">Disclaimer</Link></li>
              </ul>
            </FooterLinksColumn>
          </FooterLinks>
        </FooterContent>
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Sechman Financial. All Rights Reserved.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 