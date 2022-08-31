import React from 'react';
import { Button, TextField } from '@mui/material';
import Menu from '../Menu/Menu.jsx';
import S from './Main.module.css';
import Products from '../Products/Products.jsx';

const Main = ({ name }) => {
  return (
    <div className={S.divGeral}>
      <div className={S.divInput}>
        <TextField
          className={S.input}
          id="outlined-basic"
          label="pesquisar"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <Menu />
      <Products />
    </div>
  );
};

export default Main;
