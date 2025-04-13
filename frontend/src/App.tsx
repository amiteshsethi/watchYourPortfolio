import React, { useEffect, useState } from 'react';
import { getPortfolio } from './api';
import PortfolioList from './components/PortfolioList';
import PortfolioForm from './components/PortfolioForm';

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<any[]>([]);

  const fetchPortfolio = async () => {
    const data = await getPortfolio();
    setPortfolio(data);
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>Portfolio Monitor</h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          fontSize: '1.2rem', 
          marginBottom: '15px',
          color: '#3498db'
        }}>Add New Asset</h2>
        <PortfolioForm onAssetAdded={fetchPortfolio} />
      </div>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          fontSize: '1.2rem', 
          marginBottom: '15px',
          color: '#3498db'
        }}>Your Portfolio</h2>
        <PortfolioList assets={portfolio} />
      </div>
    </div>
  );
};

export default App;