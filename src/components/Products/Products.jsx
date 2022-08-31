import React from 'react';
import Box from '@mui/material/Box';
import Label from '../Label/Label.jsx';
import Divider from '@mui/material/Divider';
import S from './Products.module.css';

const Products = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          gap: 15,
          height: 70,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: '#FBFBFC',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <div className={S.divName}>
          <img
            className={S.img}
            src="https://http2.mlstatic.com/D_NQ_NP_967311-MLA47781264263_102021-O.jpg"
          ></img>
          <Label texto="Iphone pro 13 max" />
        </div>

        <Label texto="R$ 8.000" />
        <Label texto="Celulares" />
        <Label texto="Apple" />
        <Label texto="4.5" />
        <Label texto="Prata" />
        <Label texto="AÇÕES" />
      </Box>
    </div>
  );
};

export default Products;
