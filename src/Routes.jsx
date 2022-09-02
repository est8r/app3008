/*
- nao vamos mais usar o app.jsx para criar as rotas sera smp nesse
arquivo routes
- renomeamos o routes com switch pq o nome da const principal ja sera routes
- mudar o nome da importação do arquivo de rotas na main
- no styles ficam os arquivos css globais, que estilizam mais de uma coisa, reset.css > ele n eh module pq ele pega em todas as paginas
- components comuns a gente cria dentro de common, ex: button, input etc
- pasta fonts guardamos as fontes importadas
- pasta hooks guardam os hooks personalizados
- pasta service guarda a logica das paginas
- pasta utils deixa as utilidades tipo funções que formatam valores em dinheiro, ou que deixa tudo em maiusculo
- pasta assets deixa as imagens e dentro icons e images
- pasta public eh onde fica as imagens acessiveis pro publico ja na assets não estao e preservam direitos de imagem
- importamos fontes do google no index.html
- textfield eh o input do MUI
- usestate pra salvar os valores do input informação dinamica
- input smp tem onchange
- para usar o MUI com styled components tem q instalar os dois codigos da documentação
 */

import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import EditarProduto from './pages/EditarProduto/EditarProduto.jsx';
import Header from './components/Header/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editarproduto/:id" element={<EditarProduto />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
