// pixelController.js
import Tracker from '../models/Tracker.js';
import TrackerHit from '../models/TrackerHit.js';
import { getGeoFromIP } from '../utils/geo.js';

export const servePixel = async (req, res) => {
  const tracker = await Tracker.findOne({ slug: req.params.slug });
  if (!tracker) return res.status(404).send('Not found');

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ua = req.headers['user-agent'];
  const ref = req.headers.referer || 'no referrer';
  const geo = await getGeoFromIP(ip);

  await TrackerHit.create({ trackerId: tracker._id, ipAddress: ip, userAgent: ua, referrer: ref, locationData: geo });

  const img = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAFTAL/F6zz1AAAAABJRU5ErkJggg==', 'base64');
  res.writeHead(200, { 'Content-Type': 'image/png', 'Content-Length': img.length });
  res.end(img);
};

