import React from 'react';
import LogoImg from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={LogoImg} alt="My Burger"/>
    </div>
);

export default Logo;