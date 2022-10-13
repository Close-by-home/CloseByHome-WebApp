import { Link } from 'react-router-dom'

import Botao from '../../componentsReutilizacao/botaoVazio/Botao' 

import style from './Style.module.css'
import logo from '../../../assets/img/CloseByHomeLogo.png'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.opcoes}>
        <img src={logo} alt=""/>
        <ul>
          <li>Inicio</li>
          <li>Como Funciona?</li>
          <li>Sobre Nós!</li>
          <li>Entre em Contato</li>
        </ul>
      </div>
      <div className={style.link}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Botao text="Entrar" cor="azul"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar