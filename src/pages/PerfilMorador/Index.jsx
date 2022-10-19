import { useState } from 'react';

import Sidebar from '../../components/componentsPaginas/sidebar/Index';
import Home from '../../components/PaginasPerfil/inicial/Index';
import Servico from '../../components/PaginasPerfil/servico/Index';
import Agenda from '../../components/PaginasPerfil/agenda/Index';
import Historico from '../../components/PaginasPerfil/historico/Index';  
import Perfil from '../../components/PaginasPerfil/perfil/Index';

import style from './Style.module.css';

const PerfilMorador = () => {
  const [pagina, setPagina] = useState("home");

  function renderizarPagina(newPage) {
    setPagina(newPage);
  }

  return(
    <main className={ style.main }>
      <Sidebar pagina={ renderizarPagina } estado={ pagina }/>
      { pagina === "home" && <Home pagina={ renderizarPagina }/>}
      { pagina === "servico" && <Servico pagina={ renderizarPagina }/>}
      { pagina === "agenda" && <Agenda pagina={ renderizarPagina }/>}
      { pagina === "historico" && <Historico pagina={ renderizarPagina }/>}
      { pagina === "perfil" && <Perfil/> }
    </main>
  )
}

export default PerfilMorador;