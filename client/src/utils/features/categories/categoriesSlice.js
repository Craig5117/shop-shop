const initialState = {
  categoriesList: [],
  currentCategory: '',
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'categories/UPDATE_CATEGORIES': {
      return {
        categoriesList: [...action.payload],
        ...state,
      };
    }
    case 'categories/UPDATE_CURRENT_CATEGORY': {
      return {
        ...state,
        currentCategory: action.payload,
      };
    }
    default:
      return state;
  }
}
