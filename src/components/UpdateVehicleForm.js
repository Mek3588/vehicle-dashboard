import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UpdateVehicleForm({ vehicle, onVehicleUpdated }) {
  const [name, setName] = useState(vehicle.name);
  const [status, setStatus] = useState(vehicle.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/vehicles/${vehicle._id}`, { name, status });
      onVehicleUpdated();
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Update Vehicle</h2>
      <div className="flex gap-4 mb-4">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          fullWidth
        />
      </div>
      <Button variant="contained" color="secondary" type="submit">
        Update Vehicle
      </Button>
    </form>
  );
}

export default UpdateVehicleForm;
