import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

function AddVehicleForm({ onVehicleAdded }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://vehicle-backend-1-gk28.onrender.com/vehicles', { name, status });
      toast.success('Vehicle added successfully!');
      setName('');
      setStatus('');
      onVehicleAdded();
      window.location.reload();
    } catch (error) {
      console.error('Error adding vehicle:', error);
      toast.error('Failed to add vehicle!');
    } finally {
      setLoading(false);
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
      <Button variant="contained" color="primary" type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Vehicle'}
      </Button>
    </form>
  );
}

export default AddVehicleForm;
