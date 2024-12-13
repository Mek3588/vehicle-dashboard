import React from 'react';

function VehicleList({ vehicles, onEdit }) {
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
