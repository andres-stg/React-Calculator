import React, { useState } from 'react';

function Calculator() {
    const [entry, setEntry] = useState('');

    function calculate() {
        try {
            setEntry(String(eval(entry)).toString());
        } catch {
            setEntry("Error");
        }
    }

    function appendValue(value) {
        if (entry !== '' && ['+', '-', '*', '/'].includes(value)) {
            const lastChar = entry[entry.length - 1];
            if (['+', '-', '*', '/'].includes(lastChar)) {
                
                setEntry(entry.slice(0, -1) + value);
            } else {
                
                setEntry(entry + value);
            }
        } else {
            
            setEntry(entry + value);
        }
    

    }

    function clearEntry() {
        setEntry('');
    }

    return (
        <div>
            <input type="text" value={entry} readOnly />
            <br />
            {['1','2','3','+','4','5','6','-','7','8','9','/','c','0','=','*'].map(key => (
                <input
                    type="button"
                    value={key}
                    onClick={() => key === 'c' ? clearEntry() : key === '=' ? calculate() : appendValue(key)}
                />
            ))}
        </div>
    );
}

export default Calculator;
