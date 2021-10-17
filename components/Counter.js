import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <h1> Cantidad de clicks: {count} </h1>
        <button onClick={() => setCount(count + 1)}> Click </button>
        </>
    );
    };
