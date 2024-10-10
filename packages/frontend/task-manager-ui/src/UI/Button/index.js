import React from 'react';
import { css } from 'styled-components';
import withStyle from "../../HOC/withStyle";

const Button = (props) => {
   return (
    <button {...props}></button>
   );
};

const styles = css`height: 35px;
       width: 100px;
       border: solid 1px grey;
       cursor: pointer;
       background-color: ${(props) => props.primary ? '#82c823' : '#fff'};
       color: ${(props) => props.primary ? '#fff' : '#000'}`

export default withStyle(Button, styles);