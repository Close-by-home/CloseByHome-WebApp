import { useState } from 'react';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosServicos from '../../componentsReutilizacao/infosServicos/Index';

import style from './Style.module.css'; 

import seta from '../../../assets/icons/setaSelect.png';
import pesquisa from '../../../assets/icons/pesquisaInput.png';
import naoEncontrado from '../../../assets/img/servicoNaoEncontrado.png';

import historico from '../../../Data/historico';

const Servico = (props) => {
  const [servico, setServico] = useState() 

  function selecionarServico(servico) {
    console.log(servico)
    setServico(servico);
  }

  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <div className={ style.acharServicos }>
          <div className={ style.filtros }>
            <p>Encontre por nome</p>
            <div className={ style.inputDiv }>
              <input type="text" />
              <img src={ pesquisa } alt="" />
            </div>
            <p>Encontre por serviço</p>
            <div className={ style.selectDiv }>
              <select>
                <option value="">Pedreiro</option>
                <option value="">Manicure</option>
                <option value="">Cabeleleiro</option>
                <option value="">Jardineiro</option>
              </select>
              <span className={ style.setaPersonalizada }>
                <img src={ seta } alt="" />
              </span>
            </div>
          </div>
          <div className={ style.servicosDisponiveis }>
            <fieldset>
              <legend>Serviços no seu condominio</legend>
              {historico.map((serv, i) => {
                return <InfosServicos trab={ serv } funcao={ selecionarServico } key={i}/>
              })}
            </fieldset>
          </div>
        </div>

        <hr />

        <div className={ style.mostrarServico }>
          <h2>Selecione um Serviço</h2>
          <img src={ naoEncontrado } alt="" />
        </div>
      </div>
    </main>
  )
}

export default Servico;