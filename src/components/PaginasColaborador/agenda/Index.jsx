import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../Data/Store';
import agendaService from '../../../services/AgendaService';

import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';
import Calendario from '../../ComponentsBibliotecas/calendario/Index';

import style from './Style.module.css'

const Agenda = (props) => {
  const [servicos, setServicos] = useState([]);
  const [geralServicos, setGeralServicos] = useState([]);
  const [dia, setDia] = useState();
  const { cpf } = useContext(AppContext);
 
  
  function pegarDia(dia) {
    setDia(dia)
    setServicos(geralServicos.filter((serv)=>{
      let diasFiltrados = serv.data.slice(0,10);
      console.log(diasFiltrados,  dia, serv);
      return diasFiltrados === dia && serv
    }))
    console.log(dia)
  }

  useEffect(() => {
    agendaService.getDia({
      cpf: cpf
    }).then(res => {
        console.log(res.data);
        setGeralServicos (res.data ? res.data : []);
      }).catch(err => {
        console.log(err)
      })
    }, [])
  


  function diasTrab(dataServ) {
    // setServicos(geralServicos)
    if(dataServ.length > 0) {
      return servicos.map((serv, i) => {
        return(
          <InfosAgenda 
            key={ i }
            nome={ serv.nomeUsuario } 
            horario={ serv.data.slice(11,-4) }  
            servico={ serv.nomeServico } 
            contato={ serv.telefone }
            aparecerNota={true}
          />
        )
      }) 
    } else {
      return(
        <div className={ style.nadaAgendado }>
          <p>Você não tem nenhum serviço para este dia!</p>
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