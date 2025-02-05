import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar } from '@mui/material';

const UserDataForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', address: '', email: '', phone: '' });
    const [open, setOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userId = Math.random().toString(36).substring(2, 15);
        localStorage.setItem(userId, JSON.stringify(formData));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box mt={4}>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" name="name" onChange={handleChange} fullWidth required />
                <TextField label="Address" name="address" onChange={handleChange} fullWidth required />
                <TextField label="Email" name="email" onChange={handleChange} fullWidth required />
                <TextField label="Phone" name="phone" onChange={handleChange} fullWidth required />
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="User  data saved!" />
        </Box>
    );
};

export default UserDataForm;