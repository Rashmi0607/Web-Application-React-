import React from 'react';
import RichTextEditor from '../components/RichTextEditor';
import { Box } from '@mui/material';

const Dashboard: React.FC = () => {
    return (
        <Box>
            <h1>Dashboard</h1>
            <RichTextEditor />
        </Box>
    );
};

export default Dashboard;