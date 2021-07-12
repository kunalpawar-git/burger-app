import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses =[classes.SideDrawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer , classes.open];
    }
    
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className= {attachedClasses.join(' ')}>
            <Logo  height= "11%" margin-bottom = "32px"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;
