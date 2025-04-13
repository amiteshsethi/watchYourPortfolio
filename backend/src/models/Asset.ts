import { Schema, model, Document } from 'mongoose';

export interface IAsset extends Document {
  type: string; // "SIP" or "Stock"
  name: string;
  allocation: number; // percentage allocation
  createdAt: Date;
  updatedAt: Date;
}

const assetSchema = new Schema<IAsset>(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    allocation: { type: Number, required: true }
  },
  { timestamps: true }
);

export default model<IAsset>('Asset', assetSchema);
