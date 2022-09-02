import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Label from '../Label/Label.jsx';
import S from './Products.module.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { deleteProduto } from '../../service/api.js';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';

const Products = ({
  img,
  nome,
  preco,
  categoria,
  marca,
  avaliacao,
  cor,
  acoes,
  id,
  handleAtualizaTela,
}) => {
  const [openDelete, setOpenDelete] = useState(false);

  function abrirModal() {
    setOpenDelete(true);
  }

  function fecharModal() {
    setOpenDelete(false);
  }

  async function deletaProduto() {
    const request = await deleteProduto(id);
    fecharModal();
    handleAtualizaTela();
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          fontSize: 12,
          gap: 13,
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
          <img className={S.img} src={img}></img>
          <Label texto={nome} />
        </div>

        <Label texto={preco} />
        <Label texto={categoria} />
        <Label texto={marca} />
        <Label texto={avaliacao} />
        <Label texto={cor} />
        <Label texto={acoes} />

        <section>
          <AiOutlineEdit />
          <BsTrash
            size={30}
            color="#5569ff"
            cursor="pointer"
            onClick={abrirModal}
          />
        </section>
      </Box>
      <ModalDelete
        open={openDelete}
        handleClose={fecharModal}
        deletaProduto={deletaProduto}
      />
    </div>
  );
};

export default Products;
