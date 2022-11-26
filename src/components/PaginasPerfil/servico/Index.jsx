import { useState, useEffect } from 'react';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosServicos from '../../componentsReutilizacao/infosServicos/Index';
import AgendaPrestador from '../../componentsPaginas/agendaPrestador/Index';

import style from './Style.module.css'; 

import seta from '../../../assets/icons/setaSelect.png';
import lupa from '../../../assets/icons/pesquisaInput.png';
import naoEncontrado from '../../../assets/img/servicoNaoEncontrado.png';

import historico from '../../../Data/historico';

const Servico = (props) => {
  const [servico, setServico] = useState();
  const [pesquisa, setPesquisa] = useState("");
  const [listaServ, setListaServ] = useState([historico]);

  useEffect(() => {
    let filtro = historico.filter(serv => serv.user.toLowerCase().indexOf(pesquisa.toLowerCase()) >= 0);
    setListaServ(filtro)
  }, [pesquisa])

  function selecionarServico(servico) {
    console.log(servico)
    setServico(servico);
  }

  function filtroTag(e) {
    let filtro = historico.filter(serv => serv.servico.indexOf(e.target.value) >= 0)
    console.log(e.target.value)
    setListaServ(filtro);
  }

  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <div className={ style.acharServicos }>
          <div className={ style.filtros }>
            <p>Encontre por nome</p>
            <div className={ style.inputDiv }>
              <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
              <img src={ lupa } alt="" />
            </div>
            <p>Encontre por serviço</p>
            <div className={ style.selectDiv }>
              <select onChange={(e) => filtroTag(e)}>
                <option value="">Todos</option>
                <option value="Pedreiro">Pedreiro</option>
                <option value="Manicure">Manicure</option>
                <option value="Cabeleleiro">Cabeleleiro</option>
                <option value="Jardineiro">Jardineiro</option>
              </select>
              <span className={ style.setaPersonalizada }>
                <img src={ seta } alt="" />
              </span>
            </div>
          </div>
          <div className={ style.servicosDisponiveis }>
            <fieldset>
              <legend>Serviços no seu condominio</legend>
              {listaServ.map((serv, i) => {
                return <InfosServicos trab={ serv } funcao={ selecionarServico } key={i}/>
              })}
            </fieldset>
          </div>
        </div>

        <hr />

        {servico ?
        <AgendaPrestador infos={servico}/>
        :
        <div className={ style.mostrarServico }>
          <h2>Selecione um Serviço</h2>
          <img src={ naoEncontrado } alt="" />
        </div>}
      </div>
    </main>
  )
}

export default Servico;