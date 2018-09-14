import React from 'react';

const mergeChildren = (children,rest={}) =>
{   
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child,rest));
    return childrenWithProps;
}     

export default mergeChildren;