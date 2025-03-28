import React, { useState } from 'react';
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

const ContactOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ContactOptionCard = styled.div`
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

const ContactOptionIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ContactOptionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px;
  border-radius: 8px;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  i {
    font-size: 1.3rem;
    margin-right: 15px;
    margin-top: 3px;
  }
  
  div {
    flex: 1;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 2rem;
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 64, 128, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 64, 128, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003366;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div<{ isError?: boolean }>`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  background-color: ${props => props.isError ? '#f8d7da' : '#d4edda'};
  color: ${props => props.isError ? '#721c24' : '#155724'};
`;

const MapSection = styled(Section)`
  padding-top: 0;
`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // INSTRUCTIONS TO CONNECT TO GOOGLE FORM:
  // 1. Create a Google Form with fields that match your contact form (Name, Email, Phone, Subject, Message)
  // 2. Go to your Google Form in edit mode
  // 3. Click the three dots in the top right and select "Get pre-filled link"
  // 4. Fill in one sample response and click "Get Link"
  // 5. Copy the URL that appears - it will look something like:
  //    https://docs.google.com/forms/d/e/1FAIpQLSe...../viewform?usp=pp_url&entry.123456=Sample&entry.789012=test@example.com
  // 6. From this URL:
  //    - Extract the form ID (the part between /e/ and /viewform or /formResponse)
  //    - Note the entry IDs for each field (like entry.123456, entry.789012, etc.)
  // 7. Replace the values below with your actual form ID and entry IDs
  //
  // NOTE ABOUT CORS: Google Forms doesn't allow cross-origin requests from your website domain.
  // That's why we're using the hidden iframe approach. This will submit the form without navigating away,
  // but you won't get feedback from Google about success/failure via code.
  // The form submission will still work and data will be recorded in your Google Form responses.
  
  // Replace with your actual Google Form details
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse';
  const GOOGLE_FORM_NAME_ID = 'entry.123456789';  // Replace with your actual entry ID for name
  const GOOGLE_FORM_EMAIL_ID = 'entry.234567890'; // Replace with your actual entry ID for email 
  const GOOGLE_FORM_PHONE_ID = 'entry.345678901'; // Replace with your actual entry ID for phone
  const GOOGLE_FORM_SUBJECT_ID = 'entry.456789012'; // Replace with your actual entry ID for subject
  const GOOGLE_FORM_MESSAGE_ID = 'entry.567890123'; // Replace with your actual entry ID for message
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Creating a hidden form to send to Google Forms directly
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form element to submit
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_URL;
      form.target = 'hidden-iframe';
      
      // Add each field as a hidden input
      const nameInput = document.createElement('input');
      nameInput.type = 'hidden';
      nameInput.name = GOOGLE_FORM_NAME_ID;
      nameInput.value = formData.name;
      form.appendChild(nameInput);
      
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = GOOGLE_FORM_EMAIL_ID;
      emailInput.value = formData.email;
      form.appendChild(emailInput);
      
      const phoneInput = document.createElement('input');
      phoneInput.type = 'hidden';
      phoneInput.name = GOOGLE_FORM_PHONE_ID;
      phoneInput.value = formData.phone || 'Not provided';
      form.appendChild(phoneInput);
      
      const subjectInput = document.createElement('input');
      subjectInput.type = 'hidden';
      subjectInput.name = GOOGLE_FORM_SUBJECT_ID;
      subjectInput.value = formData.subject || 'Not provided';
      form.appendChild(subjectInput);
      
      const messageInput = document.createElement('input');
      messageInput.type = 'hidden';
      messageInput.name = GOOGLE_FORM_MESSAGE_ID;
      messageInput.value = formData.message;
      form.appendChild(messageInput);
      
      // Add form to DOM and submit
      document.body.appendChild(form);
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        message: 'Your message has been sent successfully! We will contact you soon.',
        isError: false
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setFormStatus({
        message: 'Something went wrong. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Hero 
        title="Contact Us" 
        subtitle="We're here to answer your questions and provide the financial guidance you need"
      />
      
      <Section>
        <Container>
          <SectionTitle>How Can We Help You?</SectionTitle>
          <SectionSubtitle>Choose the best way to reach us</SectionSubtitle>
          
          <ContactOptionsGrid>
            <ContactOptionCard>
              <ContactOptionIcon>
                <i className="fas fa-phone-alt"></i>
              </ContactOptionIcon>
              <ContactOptionTitle>Call Us</ContactOptionTitle>
              <p>Speak directly with one of our financial advisors for immediate assistance.</p>
              <p><strong>(800) 555-0123</strong></p>
            </ContactOptionCard>
            
            <ContactOptionCard>
              <ContactOptionIcon>
                <i className="fas fa-envelope"></i>
              </ContactOptionIcon>
              <ContactOptionTitle>Email Us</ContactOptionTitle>
              <p>Send us an email and we'll respond within 24 business hours.</p>
              <p><strong>info@sechmanfinancial.com</strong></p>
            </ContactOptionCard>
            
            <ContactOptionCard>
              <ContactOptionIcon>
                <i className="fas fa-calendar-alt"></i>
              </ContactOptionIcon>
              <ContactOptionTitle>Schedule a Meeting</ContactOptionTitle>
              <p>Fill out our contact form to schedule a consultation with a financial advisor.</p>
              <a href="#contact-form" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Contact Form</a>
            </ContactOptionCard>
          </ContactOptionsGrid>
          
          <ContactGrid>
            <ContactInfoCard>
              <h3>Contact Information</h3>
              
              <ContactInfoItem>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Office Address</h4>
                  <p>123 Financial Way, Suite 200<br />New York, NY 10001</p>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Phone Number</h4>
                  <p>(800) 555-0123</p>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Address</h4>
                  <p>info@sechmanfinancial.com</p>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
                </div>
              </ContactInfoItem>
              
              <SocialLinks>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </SocialLinks>
            </ContactInfoCard>
            
            <ContactForm id="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </SubmitButton>
              
              {formStatus && (
                <FormMessage isError={formStatus.isError}>
                  {formStatus.message}
                </FormMessage>
              )}
            </ContactForm>
          </ContactGrid>
        </Container>
      </Section>
      
      <MapSection>
        <Container>
          <SectionTitle>Find Us</SectionTitle>
          <SectionSubtitle>Visit our office</SectionSubtitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343057!2d-74.00425872404087!3d40.74076283549104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b5f4c7d85d%3A0xde2a39f48ac40c95!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1677877529051!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </MapContainer>
        </Container>
      </MapSection>
    </>
  );
};

export default Contact; 