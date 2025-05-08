import { Badge } from './ui'; // Your custom badge component

export default function DarkWebMonitor() {
  const [breaches, setBreaches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Connect to your dark web scanning service
    const fetchBreaches = async () => {
      const response = await fetch('/api/dark-web-monitor');
      const data = await response.json();
      setBreaches(data.breaches);
      setIsLoading(false);
    };
    fetchBreaches();
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-red-900/50">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-bold text-white">Dark Web Monitor</h3>
        <Badge variant="danger" className="ml-2">LIVE</Badge>
      </div>
      
      {isLoading ? (
        <p className="text-gray-400">Scanning underground markets...</p>
      ) : (
        <ul className="space-y-3">
          {breaches.map((breach, index) => (
            <li key={index} className="flex items-start">
              <div className={`w-2 h-2 mt-2 rounded-full ${breach.severity === 'critical' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{breach.description}</p>
                <p className="text-xs text-gray-400">
                  Found on: {breach.source} • {breach.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}