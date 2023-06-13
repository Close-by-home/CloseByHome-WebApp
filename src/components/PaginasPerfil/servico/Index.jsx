import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../Data/Store';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosServicos from '../../componentsReutilizacao/infosServicos/Index';
import AgendaPrestador from '../../componentsPaginas/agendaPrestador/Index';

import style from './Style.module.css'; 

import seta from '../../../assets/icons/setaSelect.png';
import lupa from '../../../assets/icons/pesquisaInput.png';
import naoEncontrado from '../../../assets/img/servicoNaoEncontrado.png';

import historico from '../../../Data/historico';
import funcionarioService from '../../../services/FuncionarioService';

const Servico = (props) => {
  const [servico, setServico] = useState();
  const [pesquisa, setPesquisa] = useState("");
  const [listaServ, setListaServ] = useState([]);
  const { codigoDoCondominio } = useContext(AppContext);

  useEffect(() => {
    funcionarioService.getFuncionario({
      codigoDoCondominio: codigoDoCondominio
    }).then(res => {
        console.log(res.data)
        setListaServ (res.data);
      }).catch(err => {
        console.log(err)
      })
  }, [codigoDoCondominio])

  function selecionarServico(servico) {
    setServico(servico);
  }

  function filtroTag(e) {
    setListaServ([])
    if(e.target.value && e.target.value !== "Todos") {
      funcionarioService.getFuncionarioServico({
        servico: e.target.value,
        codigoDoCondominio: codigoDoCondominio
      }).then(res => {
        console.log(res.data)
        setListaServ(res.data);
      }).catch(err => {
        console.log(err)
      })
    } else {
      funcionarioService.getFuncionario({
        codigoDoCondominio: codigoDoCondominio
      })
      .then(res => {
        console.log(res.data)
        setListaServ (res.data);
      }).catch(err => {
        console.log(err)
      })
    }
  }

  function pesquisarPorNome(e) {
    setListaServ([])
    setPesquisa(e.target.value)
    if(e.target.value) {
      funcionarioService.getFuncionarioNome({
        nome: e.target.value,
        codigoDoCondominio: codigoDoCondominio
      })
      .then(res => {
        console.log(res.data)
        setListaServ (res.data);
      }).catch(err => {
        console.log(err)
      })
    } else {
      funcionarioService.getFuncionario({
        codigoDoCondominio: codigoDoCondominio
      }).then(res => {
        console.log(res.data)
        setListaServ (res.data);
      }).catch(err => {
        console.log(err)
      })
    }
    }
  

  
  

  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <div className={ style.acharServicos }>
          <div className={ style.filtros }>
            <p>Encontre por nome</p>
            <div className={ style.inputDiv }>


              <input type="text" value={pesquisa} onChange={(e) => pesquisarPorNome(e)}/>
              <img src={ lupa } alt="" />


            </div>
            <p>Encontre por serviço</p>
            <div className={ style.selectDiv }>
              <select onChange={(e) => filtroTag(e)}>
                <option value={null}>Todos</option>
                <option value="Pedreiro">Pedreiro</option>
                <option value="Manicure">Manicure</option>
                <option value="Cabeleleiro">Cabeleleiro</option>
                <option value="Jardineiro">Jardineiro</option>
                <option value="Encanador">Encanador</option>
              </select>
              <span className={ style.setaPersonalizada }>
                <img src={ seta } alt="" />
              </span>
            </div>
          </div>
          <div className={ style.servicosDisponiveis }>
            <fieldset>
              <legend>Serviços no seu condominio</legend>
              {listaServ ? listaServ.map((serv, i) => {
                return <InfosServicos trab={ serv } funcao={ selecionarServico } key={i}/>
              }): (
                <div className={style.carrega} />
              )}
            </fieldset>
          </div>
        </div>

        <hr />

        {servico ?
        <AgendaPrestador infos={servico} pagina={ props.pagina }/>
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