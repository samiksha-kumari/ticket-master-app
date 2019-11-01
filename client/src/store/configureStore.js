import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import countReducer from "../reducers/count";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

// const configureStore = () => {
//   // function
//   const store = createStore(
//     combineReducers({
//       // object as argument.
//       count: countReducer
//       //(state= 0 , action) => {
//       //     switch(action.type) {
//       //         case 'INCREMENT': {
//       //             return state + 1
//       //         }
//       //         default : {
//       //             return state
//       //         }

//       //     }
//       // }
//     })
//   );

//   return store;
// };

export default configureStore;
