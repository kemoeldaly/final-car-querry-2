import './index.css';
import React, { useState } from 'react';

function Landing({ onSearch, searchResults }) {
  const [modelYear, setModelYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSearchClick = () => {
    // Invoke the onSearch function with the provided parameters
    onSearch(modelYear, make, model);
  };

  return (
    <div className="bg-sky-100 dark:bg-slate-950 rounded-lg p-8 ring-1 ring-sky-900/5 shadow w-full transition-all duration-500">
        <div className='flex justify-center items-center mb-4 text-3xl'>
        <h1 className="mb-4 flex justify-center items-center font-bold text-black dark:text-white">Vehicle Recall Search</h1>
        </div>
      <div className="flex flex-col items-center mb-2">
        <input
          type="text"
          placeholder="Model Year"
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          className="w-96 p-2 mb-2 border border-gray-300 rounded transition-all duration-300"
        />
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="w-96 p-2 mb-2 border border-gray-300 rounded transition-all duration-300"
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-96 p-2 mb-2 border border-gray-300 rounded transition-all duration-300"
        />
        <button
          onClick={handleSearchClick}
          className="w-96 dark:bg-slate-900 dark:text-white bg-sky-200 text-black rounded cursor-pointer transition-all duration-300 text-md p-2"
        >
          Search Recalls
        </button>
      </div>
      <div className='text-black dark:text-white'>
        {searchResults && searchResults.results.length > 0 && (
          <div>
            <h2 className="text-black dark:text-white text-xl font-bold mb-4">
              {searchResults.Count} Results Found
            </h2>
            {searchResults.results.map((result, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
                <h3 className="text-lg font-semibold mb-2">
                  {result.Manufacturer}
                </h3>
                <p>
                  <strong>Campaign Number:</strong> {result.NHTSACampaignNumber}
                </p>
                <p>
                  <strong>Report Received Date:</strong> {result.ReportReceivedDate}
                </p>
                <p>
                  <strong>Component:</strong> {result.Component}
                </p>
                <p>
                  <strong>Summary:</strong> {result.Summary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
  
  
  
}

export default Landing;