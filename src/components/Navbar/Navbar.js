import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id:1, name: 'HOME', link: '/home'},
        {id:2, name: 'REVIEWS', link: '/Reviews'},
        {id:3, name: 'DASHBOARD', link: '/Dashboard'},
        {id:4, name: 'BLOGS', link: '/Blogs'},
        {id:5, name: 'ABOUT', link: '/About'},

    ]
    return (
        <nav>
            <ul className='flex justify-center underline'>
                {
                    routes.map(route => <Link 
                        Key={route.id}
                        route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;