/* eslint-disable react/no-unknown-property */
import React from './react/react';
import { render } from './react/react-dom';

const App = () => (
    <div className="main-class">
        Hello World!
        <span>1234</span>
        <div>
            <input type="text" name="txt" value="Hello" onChange={console.log} />
        </div>
    </div>
);

render(<App />, document.querySelector('#app'));
