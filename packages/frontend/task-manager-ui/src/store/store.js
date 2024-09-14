import { createContext } from "react";
import combineReducers from "react-combine-reducers";
import { itemsReducer, contentReducer } from './reducers';

const contentState = {
   isFetchingLabels: false,
   labels: {}
};
const itemsState = {
   itemList: []
};
export const store = {
   items: itemsState,
   content: contentState
};

const [combinedReducer, combinedState] = combineReducers({
  items: [itemsReducer, itemsState],
  content: [contentReducer, contentState]
});

export const StoreContext = createContext({});
export const storeReducer = combinedReducer;
export default combinedState;