import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button } from '@mui/material';

const RichTextEditor: React.FC = () => {
    const [text, setText] = useState('');

    const handleSave = () => {
        localStorage.setItem('editorData', text);
        alert('Data saved to local storage!');
    };

    return (
        <Box mt={4}>
            <ReactQuill value={text} onChange={setText} />
            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '10px' }}>
                Save
            </Button>
        </Box>
    );
};

export default RichTextEditor;