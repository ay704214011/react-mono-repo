export const FETCH_LABELS = 'ITEMS/FETCH_LABELS';
export const FETCH_LABELS_SUCCESS = 'ITEMS/FETCH_LABELS_SUCCESS';
export const FETCH_LABELS_FAILURE = 'ITEMS/FETCH_LABELS_FAILURE';
export const ADD_ITEM = 'ITEMS/ADD_ITEM';
export const ADD_ITEMS = 'ITEMS/ADD_ITEMS';
export const DELETE_ITEM = 'ITEMS/DELETE_ITEM';

//Get items actions
export const FETCH_ITEMS = 'ITEMS/FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'ITEMS/FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'ITEMS/FETCH_ITEMS_FAILURE';

export const addItem = (item) => ({
  type: ADD_ITEM,
  data: item
});

export const addItems = (items) => ({
    type: ADD_ITEMS,
    data: items
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id
});

export const fetchLabels = () => ({
  type: FETCH_LABELS
});

export const fetchLabelsSuccess = (data) => ({
  type: FETCH_LABELS_SUCCESS,
  data
});

export const fetchLabelsFailure = () => ({
  type: FETCH_LABELS_FAILURE
});

export const fetchItems = () => ({
  type: FETCH_ITEMS
});

export const fetchItemsSuccess = (data) => ({
  type: FETCH_ITEMS_SUCCESS,
  data
});

export const fetchItemsFailure = () => ({
  type: FETCH_ITEMS_FAILURE
});