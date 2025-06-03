import { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';

export default function ThreatPrediction() {
  const [threatData, setThreatData] = useState(null);

  useEffect(() => {
    // Connect to your threat prediction API
    const fetchData = async () => {
      const response = await fetch('/api/threat-prediction');
      const data = await response.json();
      setThreatData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Threat Prediction Map</h3>
      {threatData ? (
        <div className="h-64">
          <Chart 
            type="heatmap"
            data={{
              labels: threatData.labels,
              datasets: [{
                label: 'Threat Level',
                data: threatData.values,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
              }]
            }}
          />
        </div>
      ) : (
        <p className="text-gray-400">Loading threat data...</p>
      )}
      <div className="mt-4 text-sm text-gray-300">
        <p>AI model accuracy: 92.4% (updated 5 min ago)</p>
      </div>
    </div>
  );
}