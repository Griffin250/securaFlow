// Node.js endpoint example
app.post('/log-event', async (req, res) => {
  const { ip, eventType } = req.body;
  
  // Use free API like ipapi.co
  const geoData = await fetch(`https://ipapi.co/${ip}/json/`);
  const { latitude, longitude, city, country } = await geoData.json();

  await db.insertEvent({
    ...req.body,
    coordinates: [longitude, latitude],
    city, 
    country
  });

  // Broadcast via WebSocket
  wss.clients.forEach(client => {
    client.send(JSON.stringify(newEvent));
  });
});