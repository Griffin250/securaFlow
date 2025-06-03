import React from "react";

export const TrackerTest = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-12">Tracker Test Page</h1>
      <p className="text-lg m-6">
        This is a test page for the invisible tracker. You can embed the tracker
        code in your HTML to test its functionality.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md m-6">
        <h2 className="text-xl font-semibold mb-4">Tracker Code</h2>
        <code className="bg-white p-4 block rounded">
          {`<img src="https://your-tracker-url.com/track" style="display:none;" />`}
        </code>
        <img src="https://securaflow.ai/t/zkpB7mj.png" className="hidden" />{" "}
      </div>
    </div>
  );
};
