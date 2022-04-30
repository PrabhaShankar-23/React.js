const redux = require("redux");
const createstore = redux.createStore;
const bindActionCreators = redux.bindActionCreators; // helper function

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCKED = "ICE_RESTOCKED";

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

function orderIceCream(qty = 1) {
  return {
    type: ICE_ORDERED,
    payload: qty,
  };
}

function restockIce(qty = 1) {
  return {
    type: ICE_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   noOfCakes: 10,
//   noOfIceCreams: 20,
//   //   anotherProperty: 0,
// };

const initialCakestate = {
  noOfCakes: 10,
};

const initialIceCreamstate = {
  noOfIceCreams: 20,
};

const Cakereducer = (state = initialCakestate, action) => {
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

const IceCreamreducer = (state = initialIceCreamstate, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...state, //here we are copying the rest of the objects.
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    case ICE_RESTOCKED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + action.payload,
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
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIce },
  store.dispatch
);
// second parameter is to what we want to bind.
// so these 2 functions are bind to the store.dispatch
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIce(4);

unsubscribe();
