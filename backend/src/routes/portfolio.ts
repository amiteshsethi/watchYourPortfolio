import { Router } from 'express';
import Asset from '../models/Asset';

const router = Router();

// Get all assets
router.get('/', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assets' });
  }
});

// Create a new asset
router.post('/', async (req, res) => {
  const { type, name, allocation } = req.body;
  try {
    const asset = await Asset.create({ type, name, allocation });
    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: 'Error creating asset' });
  }
});

// Update an asset
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { allocation } = req.body;
  try {
    const asset = await Asset.findByIdAndUpdate(id, { allocation }, { new: true });
    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: 'Error updating asset' });
  }
});

// Delete an asset
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Asset.findByIdAndDelete(id);
    res.json({ message: 'Asset deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting asset' });
  }
});

export default router;
