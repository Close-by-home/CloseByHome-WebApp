import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosTrabs from '../../componentsReutilizacao/infosTrabs/Index';

import historico from '../../../Data/historico';

import style from './Style.module.css';


const Home = (props) => {
  return(
    <main className={ style.mainHome }>
      <TitutloTelas texto="Seus" destaque="Serviços agendados" usuario="Usuario" pagina={ props.pagina }/>
      <div>

        <fieldset className={ style.contHistorico }>
        <legend> Próximo serviço</legend> 
          <InfosTrabs 
            trab={ historico[1]  }
          />
      </fieldset>
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