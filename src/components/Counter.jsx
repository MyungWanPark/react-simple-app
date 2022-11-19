import React, { useState } from 'react';

export default function Counter({onClick}) {
    const [count, setCount] = useState(0);
   
    return (
        <div>
            <div>
                count = {count}
            </div>
            <button onClick={
                () => {
                    setCount((prev) => prev + 1);
                    onClick();
                }
                }>button</button>
        </div>
    );
}

