import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummery.css';

const checkoutSummmery = (props) => {
    return(
        <div className={classes.CheckoutSummmery} className= {classes.buttonTag}>
            <h1 className= {classes.checkoutSummeryTag}>we Hope it tastes well!</h1>
            <div styel={{width:'100%', height:'300px', margin:'auto'}}>
            <Burger ingredients={props.ingredients}/> 
            </div>
            <Button
            btnType="Danger"
            clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
            btnType="Success"
            clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummmery;