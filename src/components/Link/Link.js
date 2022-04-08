import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    return (
        <li className='mr-14 unserline'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;