import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleList from './components/VehicleList';
import AddVehicleForm from './components/AddVehicleForm';
import UpdateVehicleForm from './components/UpdateVehicleForm';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:3001/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Vehicle Management Dashboard</h1>
        <AddVehicleForm onVehicleAdded={fetchVehicles} />
        {selectedVehicle && (
          <UpdateVehicleForm
            vehicle={selectedVehicle}
            onVehicleUpdated={() => {
              fetchVehicles();
              setSelectedVehicle(null);
            }}
          />
        )}
        <VehicleList vehicles={vehicles} onEdit={setSelectedVehicle} />
      </div>
    </div>
  );
}

export default App;
