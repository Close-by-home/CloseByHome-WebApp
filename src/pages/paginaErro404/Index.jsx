import style from './Style.module.css';
import error404 from '../../assets/img/erro404.png';
import Botao from '../../components/componentsReutilizacao/botaoCheio/Botao'
import { Link } from 'react-router-dom';

const Pagina404 = () => {
  return (
    <main className={ style.main }>
      <img src={error404} alt="" />
      <h2>Infelizmente não encontrados o que você estava procurando... =(</h2>
      <Link to = '/' style={{ textDecoration: "none" }}>
      <Botao text="Voltar para o menu" cor={'laranja'}></Botao>
      </Link>
    </main>
  );
}

export default Pagina404;