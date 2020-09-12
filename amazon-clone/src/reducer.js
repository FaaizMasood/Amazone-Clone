export const initialState = {
  basket: [],
};

// Selecter // this reduce the basket and tally up the total
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": // when this is the case
      return {
        ...state, // whatever the state was before
        basket: [...state.basket, action.item], // should now be whatever what is was plue whatever we decided to add
      };
    case "REMOVE_FROM_BASKET": // when this is the case
      // we get the state and the basket and us ethis index , its going through all of the basket items and does any of the basket items
      // match the action id that we passed in.
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Canr remove the product (id : ${action.id} as it is not in the basket!!!!) `
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
