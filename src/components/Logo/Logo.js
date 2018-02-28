import React from 'react';
import LogoImg from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={LogoImg} alt="My Burger"/>
    </div>
);

export default Logo;