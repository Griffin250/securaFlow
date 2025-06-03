// models/TrackerHit.js
import mongoose from 'mongoose';

const trackerHitSchema = new mongoose.Schema({
  trackerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tracker', required: true },
  ipAddress: String,
  userAgent: String,
  locationData: {
    country: String,
    city: String,
    isp: String,
  },
  referrer: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('TrackerHit', trackerHitSchema);
