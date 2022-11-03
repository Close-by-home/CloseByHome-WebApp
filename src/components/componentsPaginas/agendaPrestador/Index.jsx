import { useState } from 'react';

import Calendario from '../../componentsReutilizacao/calendario/Index'; 
import ButtonCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import MsgModal from '../../modals/modalServico/Index';

import style from './Style.module.css'
import notaUp from '../../../assets/icons/estrelaCheia.png';
import notaDown from '../../../assets/icons/estrelaVazia.png';

const AgendaPresador = ({ infos }) => {
  const [horarioSelect, setHorarioSelect] = useState();
  const [diaSelect, setDiaSelect] = useState();
  const [modal, setModal] = useState(false);

  let notaTemp = [0, 0, 0, 0, 0]

  function nota(array) {
    array.fill(1, 0, infos.nota);
    return array;
  }

  const horarios = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "18:00 - 19:00",
    "20:00 - 21:00"
  ]
  
  function pegarDia(dia) {
    setHorarioSelect();
    setDiaSelect(dia);
  }

  function agendarServico() {
    setModal(true)
    console.log("Dia:", diaSelect, "\nHorario:", horarioSelect);
  }

  function mostrarHorario() {
    return(
      <>
        <div className={style.horarios}>
          <p>Horários Disponiveis</p>
          <div className={style.listaHorarios}>
          {horarios.map((h, i) => {
            return (
              <p 
              key={i} 
              className={horarioSelect === h ? style.horarioSelecionado : ''}
              onClick={() => {
              setHorarioSelect(h)
              console.log(i, horarioSelect)
              }}>
                {h}
              </p>) 
            })}
          </div>
        </div>
        <div className={style.confirmar}>
          {horarioSelect && diaSelect ? 
          <ButtonCheio 
          cor="azul" 
          text="Contratar"
          funcao={agendarServico}
          estilo={{fontSize: "1.3rem", padding: ".5em 1.3em", marginBottom: "1em"}}/> : null}
        </div>
        {modal ? 
        <MsgModal fechar={() => setModal(false)}>
          diughaifasdfdsçkfjaçfdsfçlknsdflçkasf
        </MsgModal> : null}
      </>
    )
  }

  return(
    <div className={ style.agenda }>
      <div className={ style.perfil }>
        <div className={ style.imgPerfil } style={{ backgroundImage: `url(${infos.imagem})` }}></div>
        <div className={ style.nomeProf }>
          <p>{infos.user}</p>
          <p>{infos.servico}</p>
        </div>
        <div className={style.avaliacao}>
          <p>X avaliações</p>
          <div>
            {nota(notaTemp).map((estrela, i) => {
              return estrela ? <img alt="estrela" src={ notaUp } key={ i }/> : 
              <img alt="estrela apagada" src={ notaDown } key={ i }/>
            })}
          </div>
        </div>
      </div>
      <div className={style.calendario}>
        <p>Calendario do Prestador</p>
        <Calendario dia={pegarDia}/>
      </div>
      {diaSelect ? mostrarHorario() : ''}
    </div>
  )
}
export default AgendaPresador;