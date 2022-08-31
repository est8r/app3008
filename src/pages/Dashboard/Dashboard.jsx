import { React, useState } from 'react';
import { Button } from '@mui/material';
import Main from '../../components/Main/Main.jsx';
import S from './Dashboard.module.css';

const Dashboard = () => {
  const [name, setName] = useState();

  return (
    <div className={S.div}>
      <section className={S.section}>
        <div>
          <h2>Produtos</h2>
          <p className={S.p}>
            Use esta página para gerenciar seus produtos de forma rápida e fácil
          </p>
        </div>
        <Button variant="contained">Novo Produto</Button>
      </section>
      <Main />
    </div>
  );
};

export default Dashboard;
