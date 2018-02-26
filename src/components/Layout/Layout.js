import React from 'react';
import classes from './Layout.css';


const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main className={classes.content}>
                {children}
            </main>
        </React.Fragment>
    )
};

export default Layout;