export default {
    createElement: (type, props, ...children) => {
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
    }
};
