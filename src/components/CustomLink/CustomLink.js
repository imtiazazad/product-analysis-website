import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div className='mr-7'>
        <Link
          style={{  textDecoration: match ? "none" : "none", textDecorationColor: match ? 'red': 'black', borderBottom: match ? '3px solid red' : 'none', paddingBottom: '5px' }}
          to={to}
          {...props}
        >
          {children}
        </Link>   
      </div>
    );
  }

export default CustomLink;