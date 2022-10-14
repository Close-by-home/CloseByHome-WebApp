import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import ServicosPerfil from '../../componentsPaginas/servicosPerfil/Index';
import InfosTrabs from '../../componentsReutilizacao/infosTrabs/Index';

import style from './Style.module.css';
import img1 from '../../../assets/img/servico1.png';
import img2 from '../../../assets/img/servico2.png';
import img3 from '../../../assets/img/servico5.png';

const Home = (props) => {
  return(
    <main className={ style.mainHome }>
      <TitutloTelas texto="Bem vindo" destaque="Usuario" usuario="Usuario"/>
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
        <InfosTrabs user="Teste Um" status="Em andamento" numero="11 965442857" data="01/01/2000" nota={3}/> 
        <InfosTrabs user="Teste Dois" status="Concluido" numero="11 965442857" data="01/01/2000" nota={2}/> 
        <InfosTrabs user="Teste Tres" status="Concluido" numero="11 965442857" data="01/01/2000" nota={5}/> 
        <InfosTrabs user="Teste Quatro" status="Concluido" numero="11 965442857" data="01/01/2000" nota={1}/>   
      </fieldset>
    </main>
  )
}

export default Home;