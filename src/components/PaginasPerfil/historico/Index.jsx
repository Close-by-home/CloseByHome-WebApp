import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosTrabs from '../../componentsReutilizacao/infosTrabs/Index';

import historico from '../../../Data/historico';

import style from './Style.module.css';

const Historico = (props) => {
  return(
    <main className={ style.mainHistorico }>
      <TitutloTelas texto="Historico de" destaque="Serviços!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.historico }>
        <fieldset className={ style.container }>
          <legend>Todos os seus serviços</legend>
          {historico.map((trab) => {
          return(
          <InfosTrabs 
            user={ trab.user } 
            status={ trab.status } 
            numero={ trab.numero } 
            data={ trab.data } 
            nota={ trab.nota }
            trabalho={ trab.servico }
          />
          ) 
        })}
        </fieldset>
      </div>
    </main>
  )
}

export default Historico;