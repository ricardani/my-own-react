/* eslint-disable react/no-unknown-property */
import React, { useState, useReducer } from './modules/react';
import { render } from './modules/react-dom';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { counter: state.counter + 1 };
        case 'DECREASE':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const App = () => {
    const [name, setName] = useState('World');
    const [counter, setCounter] = useState(0);
    const [counterState, counterDispatch] = useReducer(counterReducer, { counter: 0 });
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
                <button type="button" onclick={() => setCounter(counter + 1)}>+</button>
                <button type="button" onclick={() => setCounter(counter - 1)}>-</button>
            </div>

            <div>
                <h2>
                    Counter 2: {counterState.counter}
                </h2>
                <button type="button" onclick={() => counterDispatch({ type: 'INCREASE' })}>+</button>
                <button type="button" onclick={() => counterDispatch({ type: 'DECREASE' })}>-</button>
            </div>
        </div>
    );
};

render(App, document.querySelector('#root'));
