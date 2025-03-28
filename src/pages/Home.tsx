import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getArticles } from '../firebase/articleService';
import { Article } from '../firebase/articleService';

// Styled Components
const Section = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h2 {
    font-size: 2.2rem;
    color: #004080;
    margin-bottom: 10px;
    
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
  }
`;

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 64, 128, 0.8), rgba(0, 64, 128, 0.8)), url('/hero-bg.jpg') center/cover;
  height: 600px;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// About Section
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .image-fallback {
    background-color: #e8f1f8;
    color: #004080;
    text-align: center;
    padding: 100px 20px;
    border-radius: 10px;
    font-weight: bold;
  }
`;

// Services Section
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 15px;
`;

// Resources Section
const ResourcesContent = styled.div`
  margin-bottom: 40px;
  
  p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 30px;
    line-height: 1.6;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ResourceCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    margin-bottom: 15px;
    color: #004080;
  }
  
  p {
    margin-bottom: 20px;
    text-align: left;
  }
`;

const OutlineButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: #007bff;
  padding: 10px 25px;
  border: 2px solid #007bff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

// News Section
const NewsPreview = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ArticleCard = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  
  h3 {
    color: #004080;
    margin-bottom: 10px;
  }
`;

const ArticleDate = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 15px;
  
  i {
    margin-right: 5px;
  }
`;

const ArticleLink = styled.a`
  display: inline-block;
  color: #007bff;
  font-weight: 600;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.3s;
  
  i {
    font-size: 0.8em;
    margin-left: 5px;
  }
  
  &:hover {
    color: #0056b3;
  }
`;

const NewsCTA = styled.div`
  text-align: center;
  margin-top: 30px;
`;

// Testimonials Section
const TestimonialsSlider = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const TestimonialContent = styled.div`
  margin-bottom: 20px;
  
  p {
    font-style: italic;
    line-height: 1.6;
  }
`;

const TestimonialAuthor = styled.div`
  h4 {
    margin-bottom: 5px;
    color: #004080;
  }
  
  p {
    color: #777;
    font-size: 0.9rem;
  }
`;

// Contact Section
const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  
  i {
    color: #007bff;
    font-size: 1.2rem;
    margin-right: 15px;
    margin-top: 3px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 30px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    margin-right: 15px;
    text-decoration: none;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ContactForm = styled.div`
  iframe {
    width: 100%;
    border: none;
    height: 600px;
  }
`;

const Home: React.FC = () => {
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const articles = await getArticles();
        if (articles.length > 0) {
          setLatestArticle(articles[0]);
        }
      } catch (error) {
        console.error("Error fetching latest article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticle();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection id="home">
        <Container>
          <HeroContent>
            <h1>Plan Your Financial Future With Confidence</h1>
            <p>Personalized financial planning and investment strategies to help you achieve your goals.</p>
            <Button to="/contact">Schedule a Consultation</Button>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Section id="about">
        <Container>
          <SectionHeader>
            <h2><Link to="/about">About Sechman Financial</Link></h2>
            <p>Your Trusted Financial Partner</p>
          </SectionHeader>
          <AboutContent>
            <AboutText>
              <p>At Sechman Financial, we pride ourselves on providing personalized financial planning services that address your unique needs and goals. With decades of experience in the financial industry, our team is committed to helping you navigate the complexities of financial planning with confidence.</p>
              <p>We believe in building long-term relationships with our clients, focusing on transparency, integrity, and personalized service that puts your interests first.</p>
            </AboutText>
            <AboutImage>
              <div className="image-fallback">Team Image Placeholder<br/>(Add your team image here)</div>
            </AboutImage>
          </AboutContent>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionHeader>
            <h2><Link to="/services">Our Services</Link></h2>
            <p>Comprehensive Financial Solutions</p>
          </SectionHeader>
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>
                <i className="fas fa-chart-line"></i>
              </ServiceIcon>
              <h3>Investment Management</h3>
              <p>Custom investment strategies aligned with your goals, risk tolerance, and timeline.</p>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <i className="fas fa-piggy-bank"></i>
              </ServiceIcon>
              <h3>Retirement Planning</h3>
              <p>Develop a comprehensive retirement strategy to ensure financial security in your golden years.</p>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <i className="fas fa-home"></i>
              </ServiceIcon>
              <h3>Estate Planning</h3>
              <p>Protect your assets and ensure your legacy is preserved for future generations.</p>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>
                <i className="fas fa-university"></i>
              </ServiceIcon>
              <h3>Tax Planning</h3>
              <p>Strategic tax planning to minimize liabilities and maximize your financial potential.</p>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>

      {/* Resources Section */}
      <Section id="resources">
        <Container>
          <SectionHeader>
            <h2><Link to="/resources">Resources</Link></h2>
            <p>Financial Education and Insights</p>
          </SectionHeader>
          <ResourcesContent>
            <p>We believe that financial literacy is essential for making informed decisions. Explore our resources to enhance your understanding of financial planning and investment strategies.</p>
            <ResourcesGrid>
              <ResourceCard>
                <h3>Financial Planning Guides</h3>
                <p>Comprehensive guides on various aspects of financial planning.</p>
                <OutlineButton to="/resources">Learn More</OutlineButton>
              </ResourceCard>
              <ResourceCard>
                <h3>Market Insights</h3>
                <p>Regular updates and analysis of market trends and economic developments.</p>
                <OutlineButton to="/resources">Learn More</OutlineButton>
              </ResourceCard>
              <ResourceCard>
                <h3>Retirement Calculators</h3>
                <p>Tools to help you estimate your retirement needs and plan accordingly.</p>
                <OutlineButton to="/resources">Learn More</OutlineButton>
              </ResourceCard>
            </ResourcesGrid>
          </ResourcesContent>
        </Container>
      </Section>

      {/* News Section */}
      <Section className="news-highlight" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionHeader>
            <h2>Latest News</h2>
            <p>Stay Informed with Our Financial Insights</p>
          </SectionHeader>
          <NewsPreview>
            {loading ? (
              <p>Loading the latest financial articles...</p>
            ) : latestArticle ? (
              <ArticleCard>
                <h3>{latestArticle.title}</h3>
                <ArticleDate><i className="far fa-calendar-alt"></i> {latestArticle.date}</ArticleDate>
                <p>{latestArticle.summary}</p>
                {latestArticle.url && (
                  <ArticleLink href={latestArticle.url} target="_blank" rel="noopener noreferrer">
                    Read the full article <i className="fas fa-external-link-alt"></i>
                  </ArticleLink>
                )}
              </ArticleCard>
            ) : (
              <p>Visit our News section to read the latest articles and insights from our financial experts. We regularly publish content on market trends, investment strategies, retirement planning, and more.</p>
            )}
            <NewsCTA>
              <Button to="/news">View All Articles</Button>
            </NewsCTA>
          </NewsPreview>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="testimonials">
        <Container>
          <SectionHeader>
            <h2>Client Testimonials</h2>
            <p>What Our Clients Say About Us</p>
          </SectionHeader>
          <TestimonialsSlider>
            <TestimonialCard>
              <TestimonialContent>
                <p>"Sechman Financial has been instrumental in helping me plan for retirement. Their personalized approach and attention to detail have given me confidence in my financial future."</p>
              </TestimonialContent>
              <TestimonialAuthor>
                <h4>John Smith</h4>
                <p>Client since 2015</p>
              </TestimonialAuthor>
            </TestimonialCard>
            <TestimonialCard>
              <TestimonialContent>
                <p>"The team at Sechman Financial truly understands my financial goals and has created a customized plan that addresses my unique needs. I highly recommend their services."</p>
              </TestimonialContent>
              <TestimonialAuthor>
                <h4>Jane Doe</h4>
                <p>Client since 2018</p>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsSlider>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionHeader>
            <h2><Link to="/contact">Contact Us</Link></h2>
            <p>Get in Touch with Our Team</p>
          </SectionHeader>
          <ContactContent>
            <ContactInfo>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Financial Street, New York, NY 10001</p>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-phone"></i>
                <p>(123) 456-7890</p>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                <p>info@sechmanfinancial.com</p>
              </ContactItem>
              <SocialLinks>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </SocialLinks>
            </ContactInfo>
            <ContactForm>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRjPeZe3aYCGr6PsjDKGcJG3HnZfPQjK9M3NpdtOJ51osJnQ/viewform?embedded=true" title="Contact Form"></iframe>
              <p style={{ marginTop: '15px', fontSize: '0.9em', color: '#666' }}>Your message will be sent directly to our team at samsechman@gmail.com</p>
            </ContactForm>
          </ContactContent>
        </Container>
      </Section>
    </>
  );
};

export default Home; 