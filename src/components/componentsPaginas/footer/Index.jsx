import style from './Style.module.css';
import face from '../../../assets/icons/social/facebook.png';
import insta from '../../../assets/icons/social/instagram.png';
import twitter from '../../../assets/icons/social/twitter.png';

const Footer = () => {
  return(
    <footer>
      <div className={style.redes}>
        <p>Redes sociais</p>
        <img src={ face } alt="" />
        <img src={ twitter } alt="" />
        <img src={ insta } alt="" />
      </div>
      <div className={style.contato}>
        <p>Email de contato/suporte</p>
        <p className={style.cor}>CloseByHome@gmail.com</p>
        <p>Telefone de contato/suporte</p>
        <p className={style.cor}>11 95115 5115</p>
      </div>
      <div className={style.site}>
        <p>Site Institucional</p>
        <ul>
          <li>Inicio</li>
          <li>Como funciona</li>
          <li>Sobre nós!</li>
          <li>Entre em contato</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;