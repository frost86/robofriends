import React from 'react';

const Scroll = (props) => {
    return (
        //css: overflow-y, jsx: overflowY -- you must camelCase for JSX
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;