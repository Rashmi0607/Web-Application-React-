import React from 'react';
import Counter from '../components/Counter';
import UserDataForm from '../components/UserDataForm';
import { Box } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Box>
            <h1>Welcome to the NEET Preparation App</h1>
            <Counter />
            <UserDataForm />
        </Box>
    );
};

export default Home;