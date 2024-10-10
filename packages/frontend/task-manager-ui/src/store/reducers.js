import { ADD_ITEM, ADD_ITEMS, DELETE_ITEM, FETCH_LABELS, FETCH_LABELS_SUCCESS, FETCH_LABELS_FAILURE, FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from './actions';

export const itemsReducer = (state, action) => {
   const { data } = action;
   switch (action.type) {
      case ADD_ITEM: {
         return {
            ...state,
            itemList: [
               ...state.itemList,
               data
           ]
         }
      }
      case ADD_ITEMS: {
         return {
            ...state,
            itemList: data.itemList
         }
      }
      case DELETE_ITEM: {
        const updatedItems = state.itemList.filter((item) => {
           return item.id !== action.id;
        });
        return {
            ...state,
            itemList: updatedItems
        };
      }
      case FETCH_ITEMS: {
         return {
            ...state,
            isFetchingItems: true
         };
      }
      case FETCH_ITEMS_SUCCESS: {
         return {
            ...state,
            isFetchingItems: false,
            fetchedItems: data
         };
      }
      case FETCH_ITEMS_FAILURE: {
         return {
            ...state,
            isFetchingItems: false,
            isFetchItemsError: true
         };
      }
      default:
        return {
          ...state
        };
   }
};

export const contentReducer = (state, action) => {
   console.log('state 1', state);
   switch (action.type)  {
       case FETCH_LABELS:
         return {
            ...state,
            isFetchingLabels: true
         };
      case FETCH_LABELS_SUCCESS:
         return {
            ...state,
            labels: action.data,
            isFetchingLabels: false
         };
      case FETCH_LABELS_FAILURE:
         return {
           ...state,
           isFetchingLabels: false
         };
      default:
         return {
            ...state
         };
   }
};

export default itemsReducer;