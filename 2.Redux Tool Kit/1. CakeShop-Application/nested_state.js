const redux = require("redux");
const produce = require("immer").produce;
const initialState = {
  name: "Prabha Shanker",
  address: {
    street: "park_street",
    city: "Gurugram",
    state: "Haryana",
  },
};
//step 1 defining the actiontype

const STREET_UPDATED = "STREET_UPDATED";

// defining action generator
const updatestreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// define reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(updatestreet("14 new avenue palm city"));
unsubscribe();
