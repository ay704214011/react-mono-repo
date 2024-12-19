import React, { useState, useContext, useCallback } from 'react';
import withStyle from '../../HOC/withStyle';
import styles from './AddItem.style';
import { StoreContext } from '../../store/store';
import { addItem } from '../../store/actions';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import useFormInput from '../../hooks/FormInput';
//import './AddItem.scss';

const AddItem = ({ className }) => {
    const { state, dispatch } = useContext(StoreContext);
    const [name, setName] = useState('');
    const itemName = useFormInput('', () => {
      return !itemName.value ? 'Please enter item name.' : '';
    });
    const category = useFormInput('', () => {
      return !category.value ? 'Please enter category.' : '';
    });
    const description = useFormInput('', () => {
      return !description.value ? 'Please enter description.' : '';
    });
    const [successMessage, setSuccessMessage] = useState('');
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
      itemName.onChange('');
      category.onChange('');
      description.onChange('');
      setSuccessMessage('');
    };

    const validateForm = () => {
       const isNameValid = itemName.isValid();
       const isCategoryValid = category.isValid();
       const isDescriptionValid = description.isValid();
       return isNameValid && isCategoryValid && isDescriptionValid;
    };

    const onFormSubmit = (e) => {
       console.log('on form submit');
       e.preventDefault();
       if (validateForm()) {
         console.log('form submitted successfully');
         setSuccessMessage('Form submitted successfully');
       } else {
        console.log('Some errors are there.');
       }
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
          </div>
          {successMessage && <p className="success">{successMessage}</p>}
          <form onSubmit={onFormSubmit}>
              <div className="form-contanier">
                <div className="form-item">
                  <label for="">Name</label>
                </div>
                <div className="form-item">
                  <input id="name" className="ml-8" type="text" onChange={(event) => {itemName.onChange(event.target.value)}} onBlur={itemName.onBlur} value={itemName.value}></input>
                  {itemName.error && <p className="error">{itemName.error}</p>}
                </div>
                <div className="form-item">
                  <label for="">Category</label>
                </div>
                <div className="form-item">
                  <input id="category" className="ml-8" type="text" onChange={(event) => {category.onChange(event.target.value)}} onBlur={category.onBlur} value={category.value}></input>
                  {category.error && <p className="error">{category.error}</p>}
                </div>
                <div className="form-item">
                  <label for="">Description</label>
                </div>
                <div className="form-item">
                  <textarea id="description" className="ml-8" rows="30" cols="50" onChange={(event) => {description.onChange(event.target.value)}} onBlur={description.onBlur} value={description.value}></textarea>
                  {description.error && <p className="error">{description.error}</p>}
                </div>
                <div className="form-item">
                  <Button className="ml-8" primary type="submit">{labels.addItem}</Button>
                </div>
                <div className="form-item">
                  <Button className="ml-8">{labels.reset}</Button>
                </div>
              </div>
          </form>
        </div>
    );
};

export default withStyle(AddItem, styles);