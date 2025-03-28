import React from 'react';
import styled from 'styled-components';
import Hero from '../components/common/Hero';

const Section = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

const ValuesSection = styled(Section)`
  background-color: #f5f9ff;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TeamSection = styled(Section)``;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TeamImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const TeamName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const TeamPosition = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const TeamSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  a {
    color: #333;
    font-size: 1.2rem;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const About: React.FC = () => {
  return (
    <>
      <Hero 
        title="About Sechman Financial" 
        subtitle="Your Trusted Partner in Financial Planning"
      />
      
      <Section>
        <Container>
          <TwoColumnGrid>
            <TextContent>
              <h2>Our Story</h2>
              <p>
                Founded in 2005, Sechman Financial was established with a clear mission: to provide honest, 
                personalized financial guidance to individuals and families. With decades of combined experience, 
                our team recognized the need for a different kind of financial advisory service—one that puts 
                clients first and focuses on long-term relationships rather than quick transactions.
              </p>
              <p>
                Our approach is built on understanding your unique financial situation, goals, and concerns. 
                We believe that financial success comes from personalized strategies tailored to each client's 
                specific needs, not from one-size-fits-all solutions. This client-centered philosophy has guided 
                our growth and success over the years.
              </p>
              <p>
                Today, we're proud to serve clients across the nation, helping them navigate life's financial 
                challenges and opportunities. While we've grown, our founding principles remain unchanged: integrity, 
                expertise, and unwavering commitment to our clients' financial well-being.
              </p>
            </TextContent>
            <ImageContainer>
              <img src="/images/office.jpg" alt="Sechman Financial Office" />
            </ImageContainer>
          </TwoColumnGrid>
        </Container>
      </Section>
      
      <ValuesSection>
        <Container>
          <SectionTitle>Our Core Values</SectionTitle>
          <SectionSubtitle>The Principles That Guide Us</SectionSubtitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-handshake"></i>
              </ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <p>
                We believe in doing what's right, not what's easy. Our advice is always honest, 
                transparent, and delivered with your best interests in mind. Trust is the foundation 
                of every client relationship we build.
              </p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-users"></i>
              </ValueIcon>
              <ValueTitle>Client-First</ValueTitle>
              <p>
                Your goals and concerns are at the center of everything we do. We listen carefully, 
                ask the right questions, and build financial strategies that align with your unique 
                life situation and aspirations.
              </p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-lightbulb"></i>
              </ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <p>
                The financial world constantly evolves, and so do we. We stay at the forefront of 
                financial trends, technologies, and strategies to provide you with the most effective 
                and up-to-date solutions available.
              </p>
            </ValueCard>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-chart-line"></i>
              </ValueIcon>
              <ValueTitle>Excellence</ValueTitle>
              <p>
                We're committed to the highest standards of service and expertise. Our team pursues 
                continuous education and improvement to deliver exceptional financial guidance and 
                support throughout your financial journey.
              </p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>
      
      <TeamSection>
        <Container>
          <SectionTitle>Our Team</SectionTitle>
          <SectionSubtitle>Meet the Experts Behind Your Financial Success</SectionSubtitle>
          <TeamGrid>
            <TeamCard>
              <TeamImage>
                <img src="/images/team1.jpg" alt="Michael Reynolds" />
              </TeamImage>
              <TeamInfo>
                <TeamName>Michael Reynolds</TeamName>
                <TeamPosition>Founder & Chief Financial Advisor</TeamPosition>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>
            <TeamCard>
              <TeamImage>
                <img src="/images/team2.jpg" alt="Sarah Johnson" />
              </TeamImage>
              <TeamInfo>
                <TeamName>Sarah Johnson</TeamName>
                <TeamPosition>Senior Investment Strategist</TeamPosition>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>
            <TeamCard>
              <TeamImage>
                <img src="/images/team3.jpg" alt="David Chen" />
              </TeamImage>
              <TeamInfo>
                <TeamName>David Chen</TeamName>
                <TeamPosition>Retirement Planning Specialist</TeamPosition>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>
          </TeamGrid>
        </Container>
      </TeamSection>
    </>
  );
};

export default About; 