import React from 'react';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import Menu from '../Menu/Menu.jsx';
import S from './Main.module.css';
import Products from '../Products/Products.jsx';
import { useState, useEffect } from 'react';
import { getProdutos } from '../../service/api.js';
import { red } from '@mui/material/colors';

const Main = ({ name }) => {
  const [produtos, setProdutos] = useState([]);
  const [atualizarTela, setAtualizarTela] = useState(false);

  async function requisicao() {
    const response = await getProdutos();
    setProdutos(response);
  }
  useEffect(() => {
    requisicao();
  }, []);

  function handleAtualizaTela() {
    setAtualizarTela(true);
  }

  useEffect(() => {
    if (atualizarTela === true) {
      requisicao();
      setAtualizarTela(false);
    }
  }, [atualizarTela]);
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
      <div>
        {produtos.map((produto, index) => {
          return (
            <Products
              key={produto.id}
              img={produto.url}
              nome={produto.nome_abreviado}
              categoria={produto.categoria}
              descricao={produto.descricao}
              marca={produto.marca}
              avaliacao={produto.avaliacao}
              cor={produto.cor}
              id={produto.id}
              preco={produto.preco}
              handleAtualizaTela={handleAtualizaTela}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
