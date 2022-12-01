import { useState, useEffect, useContext } from 'react';

import axios  from 'axios';

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

  useEffect((e) => {
    setServicos(
      axios.get(`http://localhost:8080/agenda/buscarPorCpf/${`70109220048`}`)
      .then(res => {
        console.log(res.data)
        setGeralServicos (res.data);
      }).catch(err => {
        console.log(err)
      })
    )
  }, [dia])

  function pegarDia(dia) {

   
      setDia(dia)
      setServicos(geralServicos.filter((serv)=>{
        let diasFiltrados = serv.data.slice(0,10);
        console.log(serv.data,  dia);
        return diasFiltrados === dia && serv
      }))
      console.log(dia)
    
  
    
  }

  function diasTrab(dataServ) {
    if(dataServ.length > 0) {
      return servicos.map((serv) => {
        return(
          <InfosAgenda 
            key={ serv.id }
            nome={ serv.nome } 
            horario={ serv.horario }  
            servico={ serv.servico } 
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
            { diasTrab(servicos) }
          </fieldset>
        </div>
      </div>
    </main>
  )
}

export default Agenda;