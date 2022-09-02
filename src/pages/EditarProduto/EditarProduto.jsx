import React from 'react';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditarProduto = () => {
  const params = useParams();
  console.log(params);
  const [nome_abreviado, setNome_abreviado] = useState('');

  function salvarProduto() {}
  return (
    <div>
      <form action="">
        <TextField
          label="Nome abreviado"
          variant="outlined"
          value={nome_abreviado}
          onChange={({ target }) => setNome_abreviado(target)}
        />
        <Button>Atualizar</Button>
      </form>
    </div>
  );
};

export default EditarProduto;
