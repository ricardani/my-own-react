let ROOT_ELEMENT;
let ROOT_CONTAINER;

export const render = (reactElement, container) => {
    ROOT_ELEMENT = ROOT_ELEMENT ?? reactElement;
    ROOT_CONTAINER = ROOT_CONTAINER ?? container;
    renderElements(ROOT_ELEMENT(), ROOT_CONTAINER);
};

const renderElements = (reactElement, container) => {
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
            children.forEach(child => renderElements(child, domElement));
        }
    }

    container.appendChild(domElement);
}

export const rerender = () => {
    ROOT_CONTAINER.firstChild.remove();
    renderElements(ROOT_ELEMENT(), ROOT_CONTAINER);
}
