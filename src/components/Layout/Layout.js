import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';


const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={classes.content}>
                {children}
            </main>
        </React.Fragment>
    )
};

export default Layout;