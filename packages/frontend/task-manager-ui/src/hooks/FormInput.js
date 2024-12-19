import { useState } from 'react';

const useFormInput = (defaultValue, validate) => {
   const [value, setValue] = useState(defaultValue);
   const [error, setError] = useState('');

   const onChange = (value) => {
     setValue(value);
   };

   const onBlur = () => {
     setError(validate());
   };

   const isValid = () => {
    const error = validate();
     setError(error);
     return !error;
   };

   return { value, error, onChange, onBlur, isValid };
};

export default useFormInput;