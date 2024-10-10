import React from 'react';
import Loader from '../components/Loader/Loader';
const withLoader = (Component, isLoading) => {
   return () => {
    return (
        <>
          {isLoading ? <Loader /> : <Component />}
        </>
     );
   };
};

export default withLoader;