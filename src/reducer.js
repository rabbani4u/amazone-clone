export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //lOGIC for adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FORM_BASKET":
      //lOGIC for adding items to basket
      return { state };
    default:
      return state;
  }
}
export default reducer;
