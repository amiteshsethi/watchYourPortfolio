import React, { useState } from 'react';
import { addAsset } from '../api';

interface Props {
  onAssetAdded: () => void;
}

const PortfolioForm: React.FC<Props> = ({ onAssetAdded }) => {
  const [type, setType] = useState('SIP');
  const [name, setName] = useState('');
  const [allocation, setAllocation] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addAsset({ type, name, allocation });
    onAssetAdded();
    setName('');
    setAllocation(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type: </label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value=\"SIP\">SIP</option>
          <option value=\"Stock\">Stock</option>
        </select>
      </div>
      <div>
        <label>Name: </label>
        <input type=\"text\" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Allocation (%): </label>
        <input type=\"number\" value={allocation} onChange={e => setAllocation(Number(e.target.value))} required />
      </div>
      <button type=\"submit\">Add Asset</button>
    </form>
  );
};

export default PortfolioForm;
