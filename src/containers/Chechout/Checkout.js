import React, { Component } from "react";
import { Route } from 'react-router-dom';

import CheckoutSummmery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from '../ContactData/ContactData';

class checkout extends Component {
    state = {
        ingredients: {
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }

    }
        componentDidMount() {
            //console.log('this.props.loaction.search', this.props.location.search);
            const query = new URLSearchParams(this.props.location.search);
            const ingredients = {};
            for (let param of query.entries()) {
                 //['salad', '1']
                ingredients[param[0]] = +param[1];
            }
            this.setState({ingredients: ingredients});
        }
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
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}/> 
            </div>
        );
    }
}

export default checkout;