import React from 'react';
import { useState, useEffect } from 'react';

const VisitorTracker = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulated data with all required fields
        const simulatedData = [
          {
            id: 1,
            date: '2025-01-16',
            time: '07:43:12 UTC',
            ip: '212.37.244.92',
            provider: 'Telia Norge AS',
            country: 'Norway',
            city: 'Oslo',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X)',
            referrer: 'https://securaflow.com/',
            isBot: false,
            threatLevel: 'low'
          },
          {
            id: 2,
            date: '2025-01-16',
            time: '07:46:45 UTC',
            ip: '89.8.53.247',
            provider: 'Telia Norge AS',
            country: 'Norway',
            city: 'Oslo',
            userAgent: 'Mozilla/5.0 (Android 14; K2 Tablet; rv:88.0)',
            referrer: 'https://securaflow.com/',
            isBot: false,
            threatLevel: 'low'
          },
          {
            id: 2,
            date: '2025-01-16',
            time: '07:46:45 UTC',
            ip: '89.8.53.247',
            provider: 'Telia Norge AS',
            country: 'Norway',
            city: 'Oslo',
            userAgent: 'Mozilla/5.0 (Android 14; K2 Tablet; rv:88.0)',
            referrer: 'https://securaflow.com/',
            isBot: false,
            threatLevel: 'low'
          },
          {
            id: 3,
            date: '2025-01-16',
            time: '08:03:44 UTC',
            ip: '54.156.251.192',
            provider: 'AMAZON-AES',
            country: 'United States',
            city: 'Ashburn',
            userAgent: 'Mozilla/5.0 (compatible; Bot)',
            referrer: 'no referrer',
            isBot: true,
            threatLevel: 'medium'
          },
           {
            id: 3,
            date: '2025-01-16',
            time: '08:03:44 UTC',
            ip: '54.156.251.192',
            provider: 'AMAZON-AES',
            country: 'United States',
            city: 'Ashburn',
            userAgent: 'Mozilla/5.0 (compatible; Bot)',
            referrer: 'no referrer',
            isBot: true,
            threatLevel: 'medium'
          }
        ].map(item => ({
          ...item,
          // Ensure all required fields have fallback values
          date: item.date || 'N/A',
          time: item.time || 'N/A',
          ip: item.ip || 'Unknown',
          provider: item.provider || 'Unknown',
          country: item.country || 'Unknown',
          city: item.city || 'Unknown',
          userAgent: item.userAgent || 'Unknown',
          referrer: item.referrer || 'no referrer',
          isBot: item.isBot || false,
          threatLevel: item.threatLevel || 'low'
        }));

        setVisitors(simulatedData);
      } catch (err) {
        console.error('Error fetching visitor data:', err);
        setError('Failed to load visitor data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  const filteredVisitors = visitors.filter(visitor => {
    if (!visitor) return false;
    if (filter === 'bots') return visitor.isBot;
    if (filter === 'threats') return visitor.threatLevel !== 'low';
    return true;
  });

  const getThreatColor = (level) => {
    if (!level) return 'bg-gray-100 text-gray-800';
    switch (level.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Visitor Activity Tracker</h1>
        <div className="flex space-x-4">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Visitors</option>
            <option value="bots">Bots Only</option>
            <option value="threats">Potential Threats</option>
          </select>
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date/Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP/Provider
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Agent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referring URL
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    More
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVisitors.length > 0 ? (
                  filteredVisitors.map((visitor) => (
                    <tr key={visitor.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{visitor.date || 'N/A'}</div>
                        <div className="text-sm text-gray-500">{visitor.time || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{visitor.ip || 'Unknown'}</div>
                        <div className="text-sm text-gray-500">{visitor.provider || 'Unknown'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{visitor.country || 'Unknown'}</div>
                        <div className="text-sm text-gray-500">{visitor.city || 'Unknown'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{visitor.userAgent || 'Unknown'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{visitor.referrer || 'no referrer'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getThreatColor(visitor.threatLevel)}`}>
                          {visitor.isBot ? 'Bot' : 'Human'} {visitor.threatLevel && visitor.threatLevel !== 'low' && `(${visitor.threatLevel})`}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Details</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                      No visitor data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorTracker;