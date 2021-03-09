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

export const useReducer = (reducer, initialState) => {
    const stateIndex = CURRENT_STATE_INDEX;
    STATES[stateIndex] = STATES[stateIndex] ?? initialState;

    const dispatch = action => {
        STATES[stateIndex] = reducer(STATES[stateIndex], action);
        console.log(STATES[stateIndex]);
        CURRENT_STATE_INDEX = 0;
        rerender();
    };

    console.log(STATES);

    CURRENT_STATE_INDEX++;

    return [STATES[stateIndex], dispatch];
};

export default {
    createElement
};
