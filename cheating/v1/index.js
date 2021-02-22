/* eslint-disable react/no-unknown-property */
import React from './modules/react';
import { render } from './modules/react-dom';

const App = () => {
    return (
        <div className="main-class">
            Hello World!
            <span>1234</span>
            <div>
                <input type="text" name="txt" placeholder="Name" onchange={e => console.log('here', e.target.value)} />
            </div>
        </div>
    )
};

render(<App />, document.querySelector('#app'));
