const initialState = {
  cartList: [],
  cartOpen: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'cart/ADD_TO_CART': {
      return {
        cartList: [...initialState.cartList, action.payload],
        cartOpen: true,
      };
    }
    case 'cart/ADD_MULTIPLE_TO_CART': {
      return {
        cartList: [...initialState.cartList, ...action.payload],
        ...state,
      };
    }
    case 'cart/REMOVE_FROM_CART': {
      return {
        cartList: initialState.cartList.filter(
          (item) => item._id !== action.payload
        ),
        ...state,
      };
    }
    case 'cart/UPDATE_CART_QUANTITY': {
      return {
        ...state,
        cartOpen: true,
        cartList: initialState.cartList.map((product) => {
          if (action.payload._id === product._id) {
            product.purchaseQuantity = action.payload.purchaseQuantity;
          }
          return product;
        }),
      };
    }
    case 'cart/CLEAR_CART': {
      return {
        ...state,
        cartOpen: false,
        cartList: [],
      };
    }
    case 'cart/TOGGLE_CART': {
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    }
    default:
      return state;
  }
}
