import { useState } from 'react';

import Sidebar from '../../components/componentsPaginas/sidebar/Index';
import Home from '../../components/PaginasPerfil/inicial/Index';
import Servico from '../../components/PaginasPerfil/servico/Index';
import Agenda from '../../components/PaginasPerfil/agenda/Index';
import Historico from '../../components/PaginasPerfil/historico/Index';  

import style from './Style.module.css';

const PerfilColaborador = () => {
  const [pagina, setPagina] = useState("home");

  function renderizarPagina(newPage) {
    console.log(newPage)
    setPagina(newPage);
  }

  return(
    <main className={ style.main }>
      <Sidebar pagina={ renderizarPagina } estado={ pagina }/>
      { pagina === "home" ? <Home/> : ""}
      { pagina === "servico" ? <Servico/> : ""}
      { pagina === "agenda" ? <Agenda/> : ""}
      { pagina === "historico" ? <Historico/> : "" }
    </main>
  )
}

export default PerfilColaborador;