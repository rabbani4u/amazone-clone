export const initialState = {
  basket: [
    {
      id: 123123,
      title:
        "Fitbit Charge 5 Advanced Fitness  Health Tracker with Built GPS Stress Management ToolsSleep Tracking, 247",
      price: 11.25,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 123123,
      title:
        "Fitbit Charge 5 Advanced Fitness  Health Tracker with Built GPS Stress Management ToolsSleep Tracking, 247",
      price: 11.25,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ],
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
