import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  isHomePage?: boolean;
}

const HeroContainer = styled.div<{ backgroundImage: string; isHomePage: boolean }>`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.5)
  ), url(${props => props.backgroundImage || '/images/default-hero.jpg'});
  background-size: cover;
  background-position: center;
  color: white;
  padding: ${props => props.isHomePage ? '160px 0' : '100px 0'};
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/default-hero.jpg',
  isHomePage = false
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} isHomePage={isHomePage}>
      <HeroContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 