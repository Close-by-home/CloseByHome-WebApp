import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosTrabs from '../../componentsReutilizacao/infosTrabs/Index';

import historico from '../../../Data/historico';

import style from './Style.module.css';
import { useEffect } from 'react';
import { Axios } from 'axios';

const Historico = (props) => {

//  useEffect(() => {
//      axios.get(`http://localhost:8080/funcionario/buscaPorServico/${}`)
//     .then(res => {
//       console.log(res.data)
//       return res.data;
//     }).catch(err => {
//       console.log(err)
//     })
//   }, [])

  return(
    <main className={ style.mainHistorico }>
      <TitutloTelas texto="Historico de" destaque="Serviços!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.historico }>
        <fieldset className={ style.container }>
          <legend>Todos os seus serviços</legend>
          {historico.map((trab) => {
          return(
          <InfosTrabs 
            trab={ trab }
            key={ trab.id }
          />
          ) 
        })}
        </fieldset>
      </div>
    </main>
  )
}

export default Historico;