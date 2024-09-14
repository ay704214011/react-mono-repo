import { useState, useContext, useCallback } from 'react';
import ItemList from "../ItemList/ItemList";
import { StoreContext } from '../../store/store';
import { addItem } from '../../store/actions';

const AddItem = () => {
    const { state, dispatch } = useContext(StoreContext);
    const [name, setName] = useState('');
    const { content: { labels }} = state;

    const onAddItem = useCallback(() => {
        if (name === '') return;
        dispatch(addItem({
          id: Math.random(),
          name: name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
        }));
        setName('');
      }, [dispatch, name]);

    return (
        <>
          <div className="form-container">
            <label>{labels.item}:</label>
            <input type="text" value={name} onChange={(event) => {
                setName(event.target.value);
            }}/>
            <button onClick={(onAddItem)}>{labels.addItem}</button>
          </div>
          <ItemList items={state.items.itemList} dispatch={dispatch} state={state}/>
        </>
    );
};

export default AddItem;