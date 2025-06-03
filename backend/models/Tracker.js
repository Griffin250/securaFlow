// models/Tracker.js
import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  slug: { type: String, unique: true, required: true },
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Tracker', trackerSchema);
