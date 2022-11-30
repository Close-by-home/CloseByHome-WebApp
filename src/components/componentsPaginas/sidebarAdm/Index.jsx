import { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './Style.module.css';
import logo from '../../../assets/img/CloseByHomeLogo2.png';

import { AppContext } from '../../../Data/Store';

const SidebarAdm = (props) => {
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
        </ul>
      </nav>
      <div className={ style.terminoNav }>
        <ul>
            
          <Link to='/' className={ style.link }>
            <li>Sair</li>
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default SidebarAdm;