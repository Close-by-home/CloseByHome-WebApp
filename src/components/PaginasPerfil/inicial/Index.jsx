import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import ServicosPerfil from '../../componentsPaginas/servicosPerfil/Index';
import InfosTrabs from '../../componentsReutilizacao/infosTrabs/Index';

import historico from '../../../Data/historico';

import style from './Style.module.css';
import img1 from '../../../assets/img/servico1.png';
import img2 from '../../../assets/img/servico2.png';
import img3 from '../../../assets/img/servico5.png';

const Home = (props) => {
  return(
    <main className={ style.mainHome }>
      <TitutloTelas texto="Bem vindo" destaque="Usuario" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <h2 >Procurando por um Serviço?</h2  >
        <div className={ style.slideCont }>
          <ServicosPerfil img={img1} msg="Reparo Técnico" link={ props.pagina }/> 
          <ServicosPerfil img={img2} msg="Cabeleleiro" link={ props.pagina }/> 
          <ServicosPerfil img={img3} msg="Jardineiro" link={ props.pagina }/>
          <div onClick={() => props.pagina("servico")} className={ style.mais }>
            <div className={ style.ponto }></div>
            <div className={ style.ponto }></div>
            <div className={ style.ponto }></div>
          </div>
        </div>
      </div>
      <fieldset className={ style.contHistorico }>
        <legend>Seus Serviços agendados</legend> 
        {historico.map((trab, i) => {
          return(
          <InfosTrabs 
            trab={ trab }
            key={ trab.id }
          />
          ) 
        })}   
      </fieldset>
    </main>
  )
}

export default Home;