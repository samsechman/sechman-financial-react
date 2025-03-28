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

const GuidesGrid = styled.div`
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

const GuideCard = styled.div`
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

const GuideHeader = styled.div`
  background-color: var(--primary-color);
  padding: 20px;
  text-align: center;
`;

const GuideIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
`;

const GuideContent = styled.div`
  padding: 25px;
`;

const GuideTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const GuideDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const GuideTopics = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #003366;
    color: white;
    transform: translateY(-2px);
  }
`;

const CalculatorsSection = styled(Section)`
  background-color: #f5f9ff;
`;

const CalculatorsGrid = styled.div`
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

const CalculatorCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CalculatorTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const CalculatorDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Resources: React.FC = () => {
  return (
    <>
      <Hero 
        title="Financial Resources" 
        subtitle="Access tools, guides, and calculators to help you make informed financial decisions"
      />
      
      <Section>
        <Container>
          <SectionTitle>Financial Planning Guides</SectionTitle>
          <SectionSubtitle>Comprehensive resources to help you navigate your financial journey</SectionSubtitle>
          <GuidesGrid>
            <GuideCard>
              <GuideHeader>
                <GuideIcon>
                  <i className="fas fa-chart-line"></i>
                </GuideIcon>
              </GuideHeader>
              <GuideContent>
                <GuideTitle>Investment Basics</GuideTitle>
                <GuideDescription>
                  Learn the fundamentals of investing, from stocks and bonds to mutual funds and ETFs. 
                  This guide will help you understand key investment concepts and build a solid foundation 
                  for your investment strategy.
                </GuideDescription>
                <GuideTopics>
                  <li>Understanding asset classes</li>
                  <li>Risk and return principles</li>
                  <li>Building a diversified portfolio</li>
                  <li>Investment vehicles comparison</li>
                  <li>Market timing vs. long-term investing</li>
                </GuideTopics>
                <Button href="#">Download Guide</Button>
              </GuideContent>
            </GuideCard>
            
            <GuideCard>
              <GuideHeader>
                <GuideIcon>
                  <i className="fas fa-umbrella"></i>
                </GuideIcon>
              </GuideHeader>
              <GuideContent>
                <GuideTitle>Retirement Planning</GuideTitle>
                <GuideDescription>
                  Prepare for a secure retirement with our comprehensive guide. Learn how to set retirement 
                  goals, understand different retirement accounts, and create a sustainable withdrawal strategy 
                  for your retirement years.
                </GuideDescription>
                <GuideTopics>
                  <li>Estimating retirement needs</li>
                  <li>401(k)s, IRAs, and Roth accounts</li>
                  <li>Social Security optimization</li>
                  <li>Catch-up strategies for late starters</li>
                  <li>Creating retirement income streams</li>
                </GuideTopics>
                <Button href="#">Download Guide</Button>
              </GuideContent>
            </GuideCard>
            
            <GuideCard>
              <GuideHeader>
                <GuideIcon>
                  <i className="fas fa-file-invoice-dollar"></i>
                </GuideIcon>
              </GuideHeader>
              <GuideContent>
                <GuideTitle>Tax Planning</GuideTitle>
                <GuideDescription>
                  Minimize your tax burden with strategic tax planning. This guide covers essential tax 
                  concepts, deductions, credits, and strategies to help you keep more of what you earn 
                  while staying compliant with tax laws.
                </GuideDescription>
                <GuideTopics>
                  <li>Tax-efficient investing strategies</li>
                  <li>Income and deduction timing</li>
                  <li>Tax-loss harvesting</li>
                  <li>Retirement account tax considerations</li>
                  <li>Charitable giving tax benefits</li>
                </GuideTopics>
                <Button href="#">Download Guide</Button>
              </GuideContent>
            </GuideCard>
          </GuidesGrid>
        </Container>
      </Section>
      
      <CalculatorsSection>
        <Container>
          <SectionTitle>Financial Calculators</SectionTitle>
          <SectionSubtitle>Interactive tools to help you plan your financial future</SectionSubtitle>
          <CalculatorsGrid>
            <CalculatorCard>
              <CalculatorTitle>Retirement Calculator</CalculatorTitle>
              <CalculatorDescription>
                Estimate how much you need to save for retirement and whether your current savings 
                strategy is on track to meet your retirement goals. Adjust variables like retirement 
                age, savings rate, and expected return to see their impact.
              </CalculatorDescription>
              <Button href="#">Try Calculator</Button>
            </CalculatorCard>
            
            <CalculatorCard>
              <CalculatorTitle>Investment Growth Calculator</CalculatorTitle>
              <CalculatorDescription>
                Visualize how your investments might grow over time with this compound interest calculator. 
                See the potential impact of different contribution amounts, rates of return, and time horizons 
                on your investment portfolio.
              </CalculatorDescription>
              <Button href="#">Try Calculator</Button>
            </CalculatorCard>
            
            <CalculatorCard>
              <CalculatorTitle>Mortgage Calculator</CalculatorTitle>
              <CalculatorDescription>
                Calculate your monthly mortgage payment based on loan amount, interest rate, and loan term. 
                Compare different scenarios to understand how changes in these variables affect your payment 
                and total interest paid.
              </CalculatorDescription>
              <Button href="#">Try Calculator</Button>
            </CalculatorCard>
          </CalculatorsGrid>
        </Container>
      </CalculatorsSection>
    </>
  );
};

export default Resources; 