import { rerender } from './react-dom';

const createElement = (type, props, ...children) => {
    if (typeof type === 'function') {
        return type(props);
    }
    return {
        type,
        props: {
            ...props,
            children
        }
    };
};

const STATES = [];
let CURRENT_STATE_INDEX = 0;

export const useState = initialState => {
    const stateIndex = CURRENT_STATE_INDEX;
    STATES[stateIndex] = STATES[stateIndex] ?? initialState;

    const setFunction = newState => {
        STATES[stateIndex] = newState;
        CURRENT_STATE_INDEX = 0;
        rerender();
    };

    CURRENT_STATE_INDEX++;

    return [STATES[stateIndex], setFunction];
};

export default {
    createElement
};
