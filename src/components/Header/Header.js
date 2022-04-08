import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
            <nav className='flex justify-center'>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;