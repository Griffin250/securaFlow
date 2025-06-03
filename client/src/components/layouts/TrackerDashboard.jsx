import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TrackerDashboard({ trackerId }) {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/trackers/${trackerId}/hits`)
      .then((res) => setHits(res.data));
  }, [trackerId]);

  return (
    <div className="p-12">
      <h2 className="text-3xl text-center font-bold m-12">Tracker Logs</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-3 py-2">Time</th>
            <th className="px-3 py-2">IP</th>
            <th className="px-3 py-2">Country</th>
            <th className="px-3 py-2">City</th>
            <th className="px-3 py-2">ISP</th>
            <th className="px-3 py-2">Referrer</th>
          </tr>
        </thead>
        <tbody>
          {hits.map((hit) => (
            <tr key={hit._id}>
              <td className="border px-3 py-1">
                {new Date(hit.timestamp).toLocaleString()}
              </td>
              <td className="border px-3 py-1">{hit.ipAddress}</td>
              <td className="border px-3 py-1">{hit.locationData?.country}</td>
              <td className="border px-3 py-1">{hit.locationData?.city}</td>
              <td className="border px-3 py-1">{hit.locationData?.isp}</td>
              <td className="border px-3 py-1">{hit.referrer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
