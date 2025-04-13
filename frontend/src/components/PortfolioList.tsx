import React from 'react';

interface Asset {
  _id: string;
  type: string;
  name: string;
  allocation: number;
}

const PortfolioList: React.FC<{ assets: Asset[] }> = ({ assets }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Allocation (%)</th>
        </tr>
      </thead>
      <tbody>
        {assets.map(asset => (
          <tr key={asset._id}>
            <td>{asset.type}</td>
            <td>{asset.name}</td>
            <td>{asset.allocation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PortfolioList;
