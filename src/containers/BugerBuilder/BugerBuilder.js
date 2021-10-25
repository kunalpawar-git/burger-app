import React, { Component } from "react";
import { connect } from 'react-redux';


import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/action';

class BugerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error:false
    }
    componentDidMount () {
        console.log(this.props);
        // axios.get('https://myburger-builder-f33a9-default-rtdb.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data});
        // })
        // .catch(error => {
        //     this.setState({error:true})
        // });
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
            this.setState({purchasable:sum > 0});
    }; 

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        
        this.setState({purchasing: false});
    }

    // purchaseContinuHandler = () => {
    //     console.log('withErrorHandler');
    //     alert('You continue!'); 
       
    //     const queryParams = [];
    //     console.log('state', this.state.ingredients);
    //     for(let i in this.props.ings) {
    //       queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    //     }
    //     queryParams.push('price=' + this.state.totalPrice);
    //     const queryString = queryParams.join('&');
    //     this.props.history.push({
    //         pathname:'/checkout',
    //         search: '?' + queryString
    //     });
    //     console.log('this.props.history.push', this.props.history);
    //    this.props.history.push('/checkout');
    // }


    render(){
        const disableInfo = {
            ...this.props.ings
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = null;
        let burger =  this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>
        console.log("this.props.ings", this.props.ings);
        if (this.props.ings) {
            burger = (
            <Aux>
                <Burger ingredients = {this.props.ings}/>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.props.price}/> 
            </Aux>
            );
            orderSummary = <OrderSummary 
            ingredients= {this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinuHandler}/>;
        }
        if(this.state.loading) {
            orderSummary = <Spinner/>;

        }
        return(
            <Aux>
                <Modal show= {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}   
                </Modal>
                {burger}
            </Aux>
        );

    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
        
    };
    
}

const mapDispatchToprops = dispatch => {
    return {
        
            onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientsName:ingName
                }),
            onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientsName:ingName})
    }

}


export default connect(mapStateToProps, mapDispatchToprops) (withErrorHandler( BugerBuilder, axios ));
