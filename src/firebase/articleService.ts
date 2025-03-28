import { 
  collection, 
  query, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  orderBy, 
  serverTimestamp, 
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from './config';

export interface Article {
  id?: string;
  title: string;
  content: string;
  summary: string;
  date: string;
  url?: string;
  author?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

const articlesCollection = collection(db, 'articles');

// Get all articles
export const getArticles = async (): Promise<Article[]> => {
  const articlesQuery = query(articlesCollection, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(articlesQuery);
  
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
    id: doc.id,
    ...doc.data()
  } as Article));
};

// Get a single article by ID
export const getArticleById = async (id: string): Promise<Article | null> => {
  const docRef = doc(db, 'articles', id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    } as Article;
  }
  
  return null;
};

// Add a new article
export const addArticle = async (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  const docRef = await addDoc(articlesCollection, {
    ...article,
    createdAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update an article
export const updateArticle = async (id: string, article: Partial<Omit<Article, 'id' | 'createdAt' | 'updatedAt'>>): Promise<void> => {
  const docRef = doc(db, 'articles', id);
  await updateDoc(docRef, {
    ...article,
    updatedAt: serverTimestamp()
  });
};

// Delete an article
export const deleteArticle = async (id: string): Promise<void> => {
  const docRef = doc(db, 'articles', id);
  await deleteDoc(docRef);
}; 