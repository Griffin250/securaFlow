// utils/geo.js
import axios from 'axios';
export const getGeoFromIP = async (ip) => {
  try {
    const res = await axios.get(`https://ipinfo.io/${ip}?token=YOUR_TOKEN`);
    const { country, city, org } = res.data;
    return { country, city, isp: org };
  } catch {
    return {};
  }
};
