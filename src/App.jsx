import React, { useState } from 'react';
import Landing from './Landing';


function App() {
  const [searchResults, setSearchResults] = useState(null);

  // Function to fetch vehicle variants
  const getVehicleVariants = async (modelYear, make, model) => {
    try {
      const variantsUrl = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${make}&model=${model}&modelYear=${modelYear}`;
      const variantsResponse = await fetch(variantsUrl);

      if (!variantsResponse.ok) {
        throw new Error(`Error fetching vehicle variants: ${variantsResponse.statusText}`);
      }

      const variantsData = await variantsResponse.json();
      console.log('Vehicle Variants:', variantsData);
      return variantsData;
    } catch (error) {
      console.error('Error fetching vehicle variants:', error.message);
      return [];
    }
  };

  // Function to handle search
  const handleSearch = async (modelYear, make, model) => {
    try {
      // Check if all parameters are defined
      if (modelYear && make && model) {
        // Step 1: Get recalls for the required combination of Model Year, Make, and Model
        const recalls = await getRecallsByVehicle(modelYear, make, model);

        // Set search results state
        setSearchResults(recalls);
      } else {
        console.error('Error handling search: Missing parameters');
      }
    } catch (error) {
      console.error('Error handling search:', error);
    }
  };

  // Function to fetch recalls by vehicle
  const getRecallsByVehicle = async (modelYear, make, model) => {
    try {
      const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${make}&model=${model}&modelYear=${modelYear}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error fetching recalls: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Recalls:', data);
      return data;
    } catch (error) {
      console.error('Error fetching recalls:', error.message);
      return null;
    }
  };

  return (
    <div className='flex items-center justify-between mb-2'>
      
      <Landing onSearch={handleSearch} searchResults={searchResults} />
    </div>
  );
}

export default App;