import { useState, useEffect, useContext } from 'react';
import agendaService from '../../../services/AgendaService';
import axios from 'axios';

import agenda from '../../../Data/agenda';

import Calendario from '../../ComponentsBibliotecas/calendario/Index';
import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css'
import { AppContext } from '../../../Data/Store';

const Agenda = (props) => {
  const [servicos, setServicos] = useState([]);
  const [dia, setDia] = useState();
  const [geralServicos, setGeralServicos] = useState([]);
  const { cpf } = useContext(AppContext);

  useEffect(() => {
    axios.get(`https://closebyhome.zapto.org:8443/agenda/buscarPorCpf/${cpf}`)
    .then((resp) => {
      console.log(resp.data)
      setServicos(resp.data)
    })
    .catch((err) => {
      console.log(err) 
    })
      // agendaService.getPorCPF({
      //   cpf: cpf
      // }).then(res => {
      //   setGeralServicos(res.data ? res.data : []);
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log(err)
      // })
  }, [dia])

  function pegarDia(dia) {

    setDia(dia)
    setServicos(geralServicos.filter((serv)=>{
      let diasFiltrados = serv.dateTime.slice(0,10);
        return diasFiltrados === dia && serv
      }))
      console.log(dia)
    
  
    
  }

  

  function diasTrab(dataServ) {
    console.log(dataServ[2]["dateTime"])
    if(dataServ.length > 0) {
      return servicos.map((serv) => {
        console.log(serv["dateTime"].slice(11))
        return serv["dateTime"].includes(dia) && (
          <InfosAgenda 
            key={ serv.id }
            nome={ serv.nomeFuncionario } 
            horario={ serv["dateTime"].slice(11) }  
            servico={ serv.nomeServico } 
            contato={ serv.contato }
          />
        )
      }) 
    } else {
      return(
        <div className={ style.nadaAgendado }>
          <p>Agende um serviço para este dia</p>
          <BotaoCheio text="Agendar Serviço" cor="azul" funcao={ () => props.pagina('servico') } estilo={{fontSize: "1.3rem"}}/>
        </div>
      )
    }
  }

  return(
    <main className={ style.mainAgenda }>
      <TitutloTelas texto="Veja sua" destaque="agenda!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.paginaAgenda }>
        <div className={style.calendario}>
          <Calendario dia={pegarDia} folgaDias={[]}/>
        </div>
        <div className={ style.agendados }>
          <fieldset className={ style.servicosAgendados }>
            <legend>Serviços Agendados</legend>
            {servicos.length > 1 && diasTrab(servicos) }
          </fieldset>
        </div>
      </div>
    </main>
  )
}

export default Agenda;