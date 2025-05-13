import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ActivityMap = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated API call - replace with actual WebSocket connection
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Sample data structure:
        const mockEvents = [
          {
            id: 1,
            type: 'login',
            status: 'success',
            city: 'Oslo',
            country: 'Norway',
            coordinates: [10.7522, 59.9139],
            timestamp: new Date().toISOString(),
            ip: '193.212.60.170',
            userAgent: 'Chrome/120.0 Windows NT 10.0'
          },
          {
            id: 2,
            type: 'failed_login',
            status: 'high_risk',
            city: 'Moscow',
            country: 'Russia',
            coordinates: [37.6176, 55.7558],
            timestamp: new Date().toISOString(),
            ip: '95.173.136.72',
            userAgent: 'TOR Browser'
          },
             {
            id: 3,
            type: 'failed_login',
            status: 'high_risk',
            city: 'Stockholm',
            country: 'Sweden',
            coordinates: [37.6176, 55.7558],
            timestamp: new Date().toISOString(),
            ip: '95.173.136.72',
            userAgent: 'TOR Browser'
          },
          // Add more sample data...
        ];
        
        setEvents(mockEvents);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching geo events:', error);
        setIsLoading(false);
      }
    };

    fetchEvents();
    
    // For real-time updates:
    // const ws = new WebSocket('wss://your-api.com/realtime');
    // ws.onmessage = (event) => {
    //   setEvents(prev => [...prev, JSON.parse(event.data)]);
    // };
    // return () => ws.close();
  }, []);

  const filteredEvents = events.filter(event => {
    if (filter === 'threats') return event.status === 'high_risk';
    if (filter === 'logins') return event.type === 'login';
    return true;
  });

  const getMarkerColor = (event) => {
    switch (event.status) {
      case 'high_risk': return 'bg-red-500 animate-pulse';
      case 'success': return 'bg-green-500';
      case 'suspicious': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-2xl text-sm font-bold text-gray-800">
          Global Activity Monitor
          <span className="ml-2 text-sm font-normal text-gray-500">
            {events.length} events in last 24h
          </span>
        </h2>
        <div className="flex space-x-4">
          <select 
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="all">All Events</option>
            <option value="threats">Threats Only</option>
            <option value="logins">Logins Only</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[600px]">
            <ComposableMap projection="geoMercator">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
              
              {filteredEvents.map((event) => (
                <Marker 
                  key={event.id} 
                  coordinates={event.coordinates}
                >
                  <div
                    className={`w-4 h-4 rounded-full shadow-xl ${getMarkerColor(event)}`}
                    data-tooltip-id={`event-${event.id}`}
                  />
                  <Tooltip 
                    id={`event-${event.id}`} 
                    className="z-50"
                  >
                    <div className="p-2 text-sm">
                      <p><strong>Type:</strong> {event.type.replace('_', ' ')}</p>
                      <p><strong>Location:</strong> {event.city}, {event.country}</p>
                      <p><strong>IP:</strong> {event.ip}</p>
                      <p><strong>Time:</strong> {new Date(event.timestamp).toLocaleString()}</p>
                      <p><strong>Device:</strong> {event.userAgent}</p>
                    </div>
                  </Tooltip>
                </Marker>
              ))}
            </ComposableMap>
            
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-md">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Successful</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>High Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Suspicious</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 md:mt-32 border-t border-gray-200">
            <h3 className="font-bold text-center md:text-left">Activity Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Total Events</p>
                <p className="text-xl font-bold">{events.length}</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Threats</p>
                <p className="text-xl font-bold">
                  {events.filter(e => e.status === 'high_risk').length}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Countries</p>
                <p className="text-xl font-bold">
                  {new Set(events.map(e => e.country)).size}
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Unique IPs</p>
                <p className="text-xl font-bold">
                  {new Set(events.map(e => e.ip)).size}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityMap;