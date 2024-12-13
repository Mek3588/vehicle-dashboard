import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VehicleList({ onEdit }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch vehicles data from backend
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://vehicle-backend-1-gk28.onrender.com/vehicles');
        setVehicles(response.data);  // Set the fetched data
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetch is complete
      }
    };

    fetchVehicles();  // Trigger data fetch on component mount
  }, []);

  // If still loading, display loading indicator or message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Once data is loaded, display the table
  return (
    <div className="mt-6">
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Last Update</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{vehicle.name}</td>
              <td className="border border-gray-300 p-2">{vehicle.status}</td>
              <td className="border border-gray-300 p-2">{new Date(vehicle.lastUpdate).toLocaleString()}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => onEdit(vehicle)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleList;
