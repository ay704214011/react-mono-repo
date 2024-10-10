import React, { useState, useContext, useCallback } from 'react';
import withStyle from '../../HOC/withStyle';
import styles from './AddItem.style';
import ItemList from "../ItemList/ItemList";
import { StoreContext } from '../../store/store';
import { addItem } from '../../store/actions';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
//import './AddItem.scss';

const AddItem = ({ className }) => {
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
    
    const onReset = () => {
      setName('');
    };

    return (
        <div className={className}>
          <p>
              {labels.title}
          </p>
          <div className="grid-container">
            <div className="grid-item">
               <label>{labels.item}:</label>
               <Input className="ml-8" type="text" value={name} onChange={(event) => {
                  setName(event.target.value);
               }}/>
            </div>
            <div className="grid-item">
               <Button onClick={(onAddItem)} className="ml-8" primary data-testid="btn-add-item">{labels.addItem}</Button>
            </div>
            <div className="grid-item">
               <Button onClick={(onReset)} className="ml-8">{labels.reset}</Button>
            </div>
            <div className="grid-item grid-item-full-width">
              <ItemList items={state.items.itemList} dispatch={dispatch} state={state}/>
            </div>
          </div>
          <div className="form-contanier">
            <div className="form-item">
              <label for="">Name</label>
            </div>
            <div className="form-item">
              <input id="name" className="ml-8" type="text"></input>
            </div>
            <div className="form-item">
               <label for="">Category</label>
            </div>
            <div className="form-item">
              <input id="category" className="ml-8" type="text"></input>
            </div>
            <div className="form-item">
               <label for="">Description</label>
            </div>
            <div className="form-item">
              <textarea id="description" className="ml-8" rows="30" cols="50"></textarea>
            </div>
            <div className="form-item">
               <Button className="ml-8" primary>{labels.addItem}</Button>
            </div>
            <div className="form-item">
               <Button className="ml-8">{labels.reset}</Button>
            </div>
          </div>
        </div>
    );
};

export default withStyle(AddItem, styles);