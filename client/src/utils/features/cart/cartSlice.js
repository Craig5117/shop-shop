const initialState = {
    cart: [],
    cartOpen: false
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/ADD_TO_CART': {
            return {
                cart: [...initialState.cart, action.payload],
                cartOpen: true,
            }
        }
        case 'cart/ADD_MULTIPLE_TO_CART': {
            return {
                cart: [...initialState.cart, ...action.payload],
                ...state
            }
        }
        case 'cart/REMOVE_FROM_CART': {
            // getting an error, not sure why
            return {
              cart: initialState.cart.filter((item) => item._id !== action.payload),
              ...state
            }
        }
        default: 
        return state
    }
}