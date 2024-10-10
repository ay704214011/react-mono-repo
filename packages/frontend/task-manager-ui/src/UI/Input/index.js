import React from 'react';
import withStyle from "../../HOC/withStyle";

const Input = (props) => {
   return (
    <input {...props}></input>
   );
};

export default withStyle(Input, `
       height: 35px;
       width: 150px;
       border: solid 1px grey;
`);