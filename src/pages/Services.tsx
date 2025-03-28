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

const ServiceItem = styled.div<{ imageRight: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.imageRight ? '1fr 1fr' : '1fr 1fr'};
  gap: 50px;
  margin-bottom: 80px;
  align-items: center;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
`;

const ServiceText = styled.div<{ imageRight: boolean }>`
  order: ${props => props.imageRight ? 1 : 2};
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ServiceImage = styled.div<{ imageRight: boolean }>`
  order: ${props => props.imageRight ? 2 : 1};
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const ServiceDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const ServiceFeatures = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    position: relative;
    
    &::before {
      content: "✓";
      color: var(--primary-color);
      font-weight: bold;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003366;
    color: white;
  }
`;

const FeaturesSection = styled(Section)`
  background-color: #f5f9ff;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
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

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CTASection = styled(Section)`
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 60px 0;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTASubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: white;
  color: var(--primary-color);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
  }
`;

const Services: React.FC = () => {
  return (
    <>
      <Hero 
        title="Our Services" 
        subtitle="Comprehensive Financial Solutions for Your Future"
      />
      
      <Section>
        <Container>
          <SectionTitle>Our Financial Services</SectionTitle>
          <SectionSubtitle>Tailored Solutions for Your Financial Goals</SectionSubtitle>
          
          <ServiceItem imageRight={false}>
            <ServiceText imageRight={false}>
              <ServiceTitle>Investment Management</ServiceTitle>
              <ServiceDescription>
                Our investment management service is designed to help you grow your wealth strategically 
                and sustainably. We create personalized investment portfolios based on your financial goals, 
                risk tolerance, and time horizon.
              </ServiceDescription>
              <ServiceFeatures>
                <li>Personalized portfolio construction</li>
                <li>Regular portfolio rebalancing</li>
                <li>Risk management strategies</li>
                <li>Tax-efficient investing</li>
                <li>Ongoing performance monitoring</li>
              </ServiceFeatures>
              <Button href="/contact">Learn More</Button>
            </ServiceText>
            <ServiceImage imageRight={false}>
              <img src="/images/investment-management.jpg" alt="Investment Management" />
            </ServiceImage>
          </ServiceItem>
          
          <ServiceItem imageRight={true}>
            <ServiceText imageRight={true}>
              <ServiceTitle>Retirement Planning</ServiceTitle>
              <ServiceDescription>
                Preparing for retirement requires careful planning and strategy. Our retirement planning services 
                help you map out a clear path to financial security in your retirement years, ensuring you maintain 
                the lifestyle you desire.
              </ServiceDescription>
              <ServiceFeatures>
                <li>Retirement income projections</li>
                <li>Social Security optimization</li>
                <li>401(k) and IRA management</li>
                <li>Pension analysis and planning</li>
                <li>Healthcare cost planning</li>
              </ServiceFeatures>
              <Button href="/contact">Learn More</Button>
            </ServiceText>
            <ServiceImage imageRight={true}>
              <img src="/images/retirement-planning.jpg" alt="Retirement Planning" />
            </ServiceImage>
          </ServiceItem>
          
          <ServiceItem imageRight={false}>
            <ServiceText imageRight={false}>
              <ServiceTitle>Estate Planning</ServiceTitle>
              <ServiceDescription>
                Proper estate planning ensures your assets are distributed according to your wishes while minimizing 
                taxes and complications for your heirs. Our comprehensive estate planning services help protect your 
                legacy for future generations.
              </ServiceDescription>
              <ServiceFeatures>
                <li>Will creation and review</li>
                <li>Trust establishment and management</li>
                <li>Power of attorney designations</li>
                <li>Healthcare directives</li>
                <li>Estate tax minimization strategies</li>
              </ServiceFeatures>
              <Button href="/contact">Learn More</Button>
            </ServiceText>
            <ServiceImage imageRight={false}>
              <img src="/images/estate-planning.jpg" alt="Estate Planning" />
            </ServiceImage>
          </ServiceItem>
          
          <ServiceItem imageRight={true}>
            <ServiceText imageRight={true}>
              <ServiceTitle>Tax Planning</ServiceTitle>
              <ServiceDescription>
                Strategic tax planning can significantly impact your overall financial picture. Our tax planning 
                services focus on identifying opportunities to minimize your tax burden while ensuring compliance 
                with all applicable tax laws.
              </ServiceDescription>
              <ServiceFeatures>
                <li>Tax-efficient investment strategies</li>
                <li>Income tax planning</li>
                <li>Tax-loss harvesting</li>
                <li>Retirement account tax strategies</li>
                <li>Charitable giving tax benefits</li>
              </ServiceFeatures>
              <Button href="/contact">Learn More</Button>
            </ServiceText>
            <ServiceImage imageRight={true}>
              <img src="/images/tax-planning.jpg" alt="Tax Planning" />
            </ServiceImage>
          </ServiceItem>
        </Container>
      </Section>
      
      <FeaturesSection>
        <Container>
          <SectionTitle>Why Choose Our Services</SectionTitle>
          <SectionSubtitle>The Benefits of Working with Sechman Financial</SectionSubtitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-user-tie"></i>
              </FeatureIcon>
              <FeatureTitle>Expert Financial Advisors</FeatureTitle>
              <p>
                Our team consists of certified professionals with decades of combined experience in the financial industry. 
                We bring deep expertise and knowledge to every client relationship.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-clipboard-check"></i>
              </FeatureIcon>
              <FeatureTitle>Personalized Approach</FeatureTitle>
              <p>
                We don't believe in one-size-fits-all solutions. Every financial plan we create is custom-tailored to your 
                unique situation, goals, and risk tolerance.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-unlock"></i>
              </FeatureIcon>
              <FeatureTitle>Transparent Communication</FeatureTitle>
              <p>
                You'll always know where you stand with your finances. We provide clear, understandable explanations of our 
                recommendations and regular updates on your progress.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-shield-alt"></i>
              </FeatureIcon>
              <FeatureTitle>Fiduciary Responsibility</FeatureTitle>
              <p>
                As fiduciaries, we are legally and ethically bound to act in your best interest at all times. Your financial 
                well-being is always our top priority.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Start Your Financial Journey?</CTATitle>
          <CTASubtitle>
            Take the first step toward financial confidence and security. Our team is ready to help you build a 
            comprehensive financial plan tailored to your unique goals and circumstances.
          </CTASubtitle>
          <CTAButton href="/contact">Schedule Consultation</CTAButton>
        </Container>
      </CTASection>
    </>
  );
};

export default Services; 