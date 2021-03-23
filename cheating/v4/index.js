/* eslint-disable react/no-unknown-property */
import React, { useState, useReducer, useEffect } from './modules/react';
import { render } from './modules/react-dom';

const currentUserReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { userId: state.userId + 1 };
        case 'DECREASE':
            return { userId: state.userId - 1 };
        default:
            return state;
    }
};

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return { currentUser: action.user };
        default:
            return state;
    }
};

const App = () => {
    const [name, setName] = useState('World');
    const [counter, setCounter] = useState(0);
    const [currentUserState, currentUserDispatch] = useReducer(currentUserReducer, { userId: 1 });
    const [usersState, usersDispatch] = useReducer(usersReducer, { currentUser: {} });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${currentUserState.userId}`)
            .then(response => response.json())
            .then(user => {
                usersDispatch({ type: 'SET', user });
            });
    }, [currentUserState]);

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
                    Current User: {currentUserState.userId}
                </h2>
                <button type="button" onclick={() => currentUserDispatch({ type: 'INCREASE' })}>+</button>
                <button type="button" onclick={() => currentUserDispatch({ type: 'DECREASE' })}>-</button>
            </div>

            {usersState.currentUser.name && (
                <div>
                    <span>{usersState.currentUser.name}</span>
                    <span>{usersState.currentUser.email}</span>
                </div>
            )}
        </div>
    );
};

render(App, document.querySelector('#root'));
