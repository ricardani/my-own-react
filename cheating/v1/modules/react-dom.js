export const render = (reactElement, container) => {
    if (typeof reactElement !== 'object') {
        const textNode = document.createTextNode(reactElement);
        container.appendChild(textNode);
        return;
    }

    const domElement = document.createElement(reactElement.type);

    if (reactElement.props) {
        const { children, ...elementProps } = reactElement.props;

        Object.keys(elementProps).forEach(prop => {
            domElement[prop] = elementProps[prop];
        });

        if (children) {
            children.forEach(child => render(child, domElement));
        }
    }

    container.appendChild(domElement);
};
