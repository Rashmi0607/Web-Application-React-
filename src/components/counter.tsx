import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const backgroundColor = `rgba(0, 150, 255, ${count / 100})`;
        document.body.style.backgroundColor = backgroundColor;
    }, [count]);

    const increment = () => setCount(prev => Math.min(prev + 1, 100));
    const decrement = () => setCount(prev => Math.max(prev - 1, 0));
    const reset = () => setCount(0);

    return (
        <Box textAlign="center" mt={4}>
            <h2>Counter: {count}</h2>
            <Button variant="contained" color="primary" onClick={increment}>Increment</Button>
            <Button variant="contained" color="secondary" onClick={decrement}>Decrement</Button>
            <Button variant="contained" onClick={reset}>Reset</Button>
        </Box>
    );
};

export default Counter;