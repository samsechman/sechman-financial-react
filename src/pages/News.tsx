import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from '../components/common/Hero';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

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

const ArticlesGrid = styled.div`
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

const ArticleCard = styled.div`
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

const ArticleImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ArticleContent = styled.div`
  padding: 25px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const ArticleSummary = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
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
  
  i {
    margin-left: 5px;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid var(--primary-color);
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 50px;
  
  h3 {
    margin-bottom: 1rem;
    color: #666;
  }
  
  p {
    color: #888;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 50px;
  color: var(--danger-color);
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 500px;
    margin: 0 auto;
  }
`;

interface Article {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  url: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const articlesCollection = collection(db, 'articles');
        const articlesSnapshot = await getDocs(articlesCollection);
        const articlesList = articlesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Article[];
        
        setArticles(articlesList);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const renderContent = () => {
    if (loading) {
      return (
        <LoadingContainer>
          <Spinner />
          <p>Loading articles...</p>
        </LoadingContainer>
      );
    }
    
    if (error) {
      return (
        <ErrorState>
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
        </ErrorState>
      );
    }
    
    if (articles.length === 0) {
      return (
        <EmptyState>
          <h3>No articles available</h3>
          <p>Check back soon for the latest financial news and insights from our experts.</p>
        </EmptyState>
      );
    }
    
    return (
      <ArticlesGrid>
        {articles.map(article => (
          <ArticleCard key={article.id}>
            <ArticleImage>
              <img src={article.imageUrl} alt={article.title} />
              <DateBadge>{formatDate(article.date)}</DateBadge>
            </ArticleImage>
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleSummary>{article.summary}</ArticleSummary>
              <Button href={article.url} target="_blank" rel="noopener noreferrer">
                Read Article <i className="fas fa-external-link-alt"></i>
              </Button>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    );
  };
  
  return (
    <>
      <Hero 
        title="Financial News & Insights" 
        subtitle="Stay updated with the latest financial news, market trends, and expert insights"
      />
      
      <Section>
        <Container>
          <SectionTitle>Latest Articles</SectionTitle>
          <SectionSubtitle>Updates from our financial experts</SectionSubtitle>
          {renderContent()}
        </Container>
      </Section>
    </>
  );
};

export default News; 