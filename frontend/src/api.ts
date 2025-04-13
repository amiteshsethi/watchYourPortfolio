export async function getPortfolio() {
  const response = await fetch('http://localhost:5000/api/portfolio');
  return response.json();
}

export async function addAsset(asset: { type: string; name: string; allocation: number }) {
  const response = await fetch('http://localhost:5000/api/portfolio', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(asset),
  });
  return response.json();
}
