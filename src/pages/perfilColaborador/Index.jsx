import { useState } from 'react';

import Sidebar from '../../components/componentsPaginas/sidebarColaborador/Index';
import Home from '../../components/PaginasColaborador/inicial/Index';
import ConfServico from '../../components/PaginasColaborador/ConfServico/Index';
import Agenda from '../../components/PaginasColaborador/agenda/Index';
import Historico from '../../components/PaginasPerfil/historico/Index';  
import Dashboard from '../../components/PaginasColaborador/dashboard/Index';
import Perfil from '../../components/PaginasPerfil/perfil/Index';

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
      { pagina === "home" ? <Home  pagina={ renderizarPagina }/> : ""}
      { pagina === "confServico" ? <ConfServico pagina={ renderizarPagina }/> : ""}
      { pagina === "agenda" ? <Agenda pagina={ renderizarPagina }/> : ""}
      { pagina === "historico" ? <Historico pagina={ renderizarPagina }/> : "" }
      { pagina === "dashboard" ? <Dashboard pagina={ renderizarPagina }/> : "" }
      { pagina === "perfil" && <Perfil/> }
    </main>
  )
}

export default PerfilColaborador;