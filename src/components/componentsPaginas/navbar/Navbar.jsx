import { Link as LinkReact } from 'react-router-dom'

import Botao from '../../componentsReutilizacao/botaoVazio/Botao' 

import style from './Style.module.css'
import logo from '../../../assets/img/CloseByHomeLogo.png'
import { Link,animateScroll as scroll }  from "react-scroll";

const Navbar = () => {
  console.log(window.window.pageYOffset);
  
  return (
    <nav className={style.nav}>
      <div className={style.opcoes}>
        <img src={logo} alt=""/>
        <div className={style.div_itens}>
          <Link 
            className={ style.link } 
            activeClass="active" 
            to="sec_inicio" 
            spy={true} 
            smooth={true}
            offset={-100} 
            duration={500}
          >
            Inicio
          </Link>
          <Link 
            className={ style.link } 
            activeClass="active" 
            to="sec_passoAPasso" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
          >
            Como Funciona?
          </Link>
          <Link 
            className={ style.link } 
            activeClass="active" 
            to="sec_sobre" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
          >
            Sobre Nós!
          </Link>
          <Link 
            className={ style.link } 
            activeClass="active" 
            to="sec_contato" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
          >
            Entre em Contato
          </Link>
        </div>
      </div>
      <div className={style.link}>
        <LinkReact to="/login" style={{ textDecoration: "none" }}>
          <Botao text="Entrar" cor="azul"/>
        </LinkReact>
      </div>
    </nav>
  )
}

export default Navbar