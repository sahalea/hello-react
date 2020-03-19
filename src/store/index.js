import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

export default (initialState = {}) => {
  const middleware = [thunk];
  const enahancer = applyMiddleware(...middleware);
  const persistedState = loadFromLocalStorage();
  const store = createStore(rootReducer, persistedState, enahancer);
  store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
};

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (e) {
    return e;
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return e;
  }
}
