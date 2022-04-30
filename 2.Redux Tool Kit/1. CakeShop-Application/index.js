const redux = require("redux");
const createstore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";

const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    // quantity: qty,
    payload: qty,
  };
}

const initialState = {
  noOfCakes: 10,
  //   anotherProperty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //here we are copying the rest of the objects.
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const store = createstore(reducer);
console.log("Initial stage", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

unsubscribe();
