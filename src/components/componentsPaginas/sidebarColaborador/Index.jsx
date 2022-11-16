import { Link } from 'react-router-dom';

import style from './Style.module.css';
import logo from '../../../assets/img/CloseByHomeLogo2.png';

const Sidebar = (props) => {
  return(
    <aside className={ style.sidebar }>
      <div className={ style.logo }>
        <img src={ logo } alt="" />
      </div>
      <nav className={ style.nav }>
        <ul>
          <li onClick={() => props.pagina("home")} className={ props.estado === "home" ? style.select : "" }>
            Inicio
          </li>
          <li onClick={() => props.pagina("confServico")} className={ props.estado === "confServico" ? style.select : "" }>
            Config Serviços
          </li>
          <li onClick={() => props.pagina("agenda")} className={ props.estado === "agenda" ? style.select : "" }>
            Agenda
          </li>
          <li onClick={() => props.pagina("historico")} className={ props.estado === "historico" ? style.select : "" }>
            Histórico
          </li>
          <li onClick={() => props.pagina("dashboard")} className={ props.estado === "dashboard" ? style.select : "" }>
            Dashboard
          </li>
        </ul>
      </nav>
      <div className={ style.terminoNav }>
        <ul>
          <Link to='/perfil' className={ style.link }>
            <li>Conta Cliente</li>
          </Link>
          <Link to='/' className={ style.link }>
            <li>Sair</li>
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;