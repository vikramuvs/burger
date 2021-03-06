import { remove } from 'fs-extra';
import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng)
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedSt);
};

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        error: false,
        totalPrice: 4
    } );
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: 
            return addIngredient(state, action);
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            //     },
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            // };

        case actionTypes.REMOVE_INGREDIENTS:
            return removeIngredient(state, action);
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            //     },
            //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            // };

        case actionTypes.SET_INGREDIENTS:
            return setIngredient(state, action);
            // return {
            //     ...state,
            //     ingredients: action.ingredients,
            //     error: false,
            //     totalPrice: 4
            // };

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
            // return {
            //     ...state,
            //     error: true
            // };
        default: 
            return state;
    }
};

export default reducer;