import * as actionType from './action';

const initialState = {
   ingredients: {
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
   },
   totalPrice: 4
}

const INGREDIENT_PRICES = {
    salad:20,
    bacon:12,
    cheese:15,
    meat:35
};
const reducer = (state=initialState, action) => {
   switch (action.type) {
       case actionType.ADD_INGREDIENT:
           console.log("in reducer", action);
           return {
               ...state,
               ingredients: {
                   ...state.ingredients,
                   
                //   [action.ingredientsName]:1
                  [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
               },
               totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName]
               
           };
       case actionType.REMOVE_INGREDIENT:
           return {
               ...state,
               ingredients: {
                   ...state.ingredients,
                   [action.ingredientName]: state.ingredients[action.ingredientName] - 1
               },
               totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
           };
           
       default:
           return state;
   }  

}

export default reducer;