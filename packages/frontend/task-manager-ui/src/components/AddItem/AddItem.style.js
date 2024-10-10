import { css } from 'styled-components';

export default css`
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: 100px 100px;
      grid-row-gap: 5px;
      grid-column-gap: 5px
    }
    .grid-item-full-width {
       grid-column-start: 1;
       grid-column-end: 4;
    }
    .form-contanier {
       display: grid;
       grid-template-columns: auto auto;
       grid-template-rows: repeat(2, 1fr) 2fr;
       grid-row-gap: 5px;
       grid-column-gap: 5px;

       input, textarea {
         width: 250px;
         height: 30px;
         border: solid 2px grey;
       }
    }
    .form-item {
       text-align: left;
    }
`;