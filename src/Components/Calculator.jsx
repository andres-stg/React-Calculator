import React, { useState } from 'react';

function Calculator() {
    const [entry, setEntry] = useState('');

    function calculate() {
        try {
            setEntry(eval(entry));
        } catch {
            setEntry("Error");
        }
    }

    function appendValue(value) {
        setEntry(prev => prev + value);
    }

    function clearEntry() {
        setEntry('');
    }

    return (
        <div>
            <input type="text" value={entry} readOnly />
            <br />
            <input type="button" value="1" onClick={() => appendValue('1')} />
            <input type="button" value="2" onClick={() => appendValue('2')} />
            <input type="button" value="3" onClick={() => appendValue('3')} />
            <input type="button" value="+" onClick={() => appendValue('+')} />
            <input type="button" value="4" onClick={() => appendValue('4')}/>
            <input type="button" value="5" onClick={() => appendValue('5')}/>
            <input type="button" value="6" onClick={() => appendValue('6')}/>
            <input type="button" value="-" onClick={() => appendValue('-')}/>
            <input type="button" value="7" onClick={() => appendValue('7')}/>
            <input type="button" value="8" onClick={() => appendValue('8')}/>
            <input type="button" value="9" onClick={() => appendValue('9')}/>
            <input type="button" value="/" onClick={() => appendValue('/')}/>
            <input type="button" value="c" onClick={clearEntry} />
            <input type="button" value="0" onClick={() => appendValue('0')} />
            <input type="button" value="=" onClick={calculate} />
            <input type="button" value="x" onClick={() => appendValue('*')} />
        </div>
    );
}

export default Calculator;