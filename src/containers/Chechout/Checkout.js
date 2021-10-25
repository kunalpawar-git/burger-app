import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import CheckoutSummmery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from '../ContactData/ContactData';

class checkout extends Component {

        checkoutCancelledHandler = () => {
            this.props.history.goBack();
        }

        checkoutContinuedHandler = () => {
            this.props.history.replace('/checkout/contact-data');
        }
    render() {
        return (
            <div>
                 <CheckoutSummmery 
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}/> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings:state.ingredients
    }
}

export default connect(mapStateToProps)(checkout);