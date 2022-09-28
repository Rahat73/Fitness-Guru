import React from 'react';
import logo from '../../images/gym-logo.png'

const Header = () => {
    return (
        <div className='flex my-16'>
            <img className='w w-16 mx-5' src={logo} alt="" />
            <h1 className='text text-4xl'>Fitness Guru</h1>
        </div>
    );
};

export default Header;