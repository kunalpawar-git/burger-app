import React, { Component } from "react";

import CheckoutSummmery from '../../components/Order/CheckoutSummery/CheckoutSummery';

class checkout extends Component {
    state = {
        ingredients: {
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummmery ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default checkout;