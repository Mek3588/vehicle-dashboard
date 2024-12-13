import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddVehicleForm({ onVehicleAdded }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/vehicles', { name, status });
      setName('');
      setStatus('');
      onVehicleAdded();
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Add Vehicle</h2>
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
      <Button variant="contained" color="primary" type="submit">
        Add Vehicle
      </Button>
    </form>
  );
}

export default AddVehicleForm;
