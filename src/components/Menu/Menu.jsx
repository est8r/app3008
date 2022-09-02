import React from 'react';
import Label from '../Label/Label.jsx';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import S from './Menu.module.css';

const Menu = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingRight: 10,
          fontSize: 12,
          height: 50,
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
          <Label texto="NOME DO PRODUTO" />
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
        </div>
        <Label className={S.label} texto="PREÇO" />
        <Label className={S.label} texto="CATEGORIA" />
        <Label className={S.label} texto="MARCA" />
        <Label className={S.label} texto="AVALIAÇÃO" />
        <Label className={S.label} texto="COR" />
        <Label className={S.label} texto="AÇÕES" />
      </Box>
    </div>
  );
};

export default Menu;
