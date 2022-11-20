import React, { useState } from 'react';
import Counter from './Counter';

export default function Intro() {
    const [total, setTotal] = useState(0);
    const handleClick = () => {
        setTotal(total => total + 1)
    };
 
    return (
        <>
            <div>total count = {total}</div>
            <div>
                <Counter onClick={handleClick} />
                <Counter onClick={handleClick} />
            </div>
        </>
    );
}

