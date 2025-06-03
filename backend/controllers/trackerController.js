// trackerController.js
import Tracker from "../models/Tracker.js";
import TrackerHit from "../models/TrackerHit.js";
import { nanoid } from "nanoid";

export const createTracker = async (req, res) => {
  const { userId, name } = req.body;
  const slug = nanoid(7);
  const tracker = new Tracker({ userId, name, slug });
  await tracker.save();
  res.json({ slug, url: `https://securaflow.ai/t/${slug}.png` });
};

export const getTrackerHits = async (req, res) => {
  console.log("Getting hits for tracker:", req.params.id);
  try {
    const hits = await TrackerHit.find({ trackerId: req.params.id }).sort({
      timestamp: -1,
    });
    return res.json(hits);
  } catch (err) {
    console.error("Error fetching hits:", err);
    return res.status(500).json({ message: "Server error fetching hits" });
  }
  const hits = await TrackerHit.find({ trackerId: req.params.id }).sort({
    timestamp: -1,
  });
  res.json(hits);
};
