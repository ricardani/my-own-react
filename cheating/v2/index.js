/* eslint-disable react/no-unknown-property */
import React, { useState } from './modules/react';
import { render } from './modules/react-dom';

const App = () => {
    const [name, setName] = useState('World');
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    return (
        <div className="main-class">
            Hello {name}!
            <span>1234</span>
            <div>
                <input type="text" name="txt" placeholder="Name" value={name} onchange={e => setName(e.target.value)} />
            </div>
            <div>
                <h2>
                    Counter: {counter}
                </h2>
                <button onclick={() => setCounter(counter + 1)}>+</button>
                <button onclick={() => setCounter(counter - 1)}>-</button>
            </div>

            <div>
                <h2>
                    Counter 2: {counter2}
                </h2>
                <button onclick={() => setCounter2(counter2 + 1)}>+</button>
                <button onclick={() => setCounter2(counter2 - 1)}>-</button>
            </div>
        </div>
    )
};

render(App, document.querySelector('#root'));
