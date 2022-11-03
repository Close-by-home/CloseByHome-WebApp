import { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './Style.module.css';
import logo from '../../../assets/img/CloseByHomeLogo2.png';

import { AppContext } from '../../../Data/Data';

const Sidebar = (props) => {
  const { servico } = useContext(AppContext);

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
          <li onClick={() => props.pagina("servico")} className={ props.estado === "servico" ? style.select : "" }>
            Serviço
          </li>
          <li onClick={() => props.pagina("agenda")} className={ props.estado === "agenda" ? style.select : "" }>
            Agenda
          </li>
          <li onClick={() => props.pagina("historico")} className={ props.estado === "historico" ? style.select : "" }>
            Histórico
          </li>
        </ul>
      </nav>
      <div className={ style.terminoNav }>
        <ul>
          <Link 
          to='/perfilColaborador' 
          className={ style.link }
          style={servico ? {display: "block"} : {visibility: "hidden"}}>
            <li>Conta Serviço</li>
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