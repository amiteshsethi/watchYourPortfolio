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
    <div style={{ padding: '20px' }}>
      <h1>Portfolio Monitor</h1>
      <PortfolioForm onAssetAdded={fetchPortfolio} />
      <PortfolioList assets={portfolio} />
    </div>
  );
};

export default App;
