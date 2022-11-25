import { useState } from 'react';

import Calendario from '../../ComponentsBibliotecas/calendario/Index';
import maisIcon from '../../../assets/icons/icon-mais.png';
import menosIcon from '../../../assets/icons/icon-menos.png';
import addHorario from '../../../assets/icons/addHorario.png';
import menosIconHorarios from '../../../assets/icons/excluir_horario.png';
import Notificacao from '../../modals/notificacao/Index';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import MsgModal from '../../modals/msgModal/Index';

import { dias, tagsServicos } from '../../../data/configurarServ';

import style from './Style.module.css';

const ConfServico = (props) => {

  const [listaDias, setListaDias] = useState([]);
  const [disponivel, setDisponivel] = useState(true);
  const [servico, setServico] = useState("");
  const [horarios, setHorarios] = useState([])
  const [horario1, setHorario1] = useState();
  const [horario2, setHorario2] = useState();
  const [modalServicos, setModalServicos] = useState(false);
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [notificacao, setNotificacao] = useState(false);
  const [msg, setMsg] = useState("");
  const [cor, setCor] = useState("");

  function addListaDias(dia) {
    for(let i = 0; i < listaDias.length; i++) {
      if(listaDias[i] === dia) {
        setListaDias(listaDias.filter((dias) => {
          return dias !== dia;
        }))
        return 
      }
    }
    setListaDias([...listaDias, dia])
  }

  function escolherServ(serv) {
    setServico(serv);
    setModalServicos(false);
  }

  function adicionarHorario() {
    if(horario1 == null || horario2 == null) {
      setCor("laranja")
      setMsg("Selecione um horario para adiciona-lo")
      setNotificacao(true)
      const timer = setTimeout(() => setNotificacao(false), 4000);
      return  () => clearTimeout(timer);
    }

    const [horario1_1] = horario1.split(":")
    const [horario2_1] = horario2.split(":")
    console.log(parseInt(horario1_1) > parseInt(horario2_1))

    if(parseInt(horario1_1) > parseInt(horario2_1)) {
      setMsg("O horário de termino não pode ser menor que o horário de inicio ")
      setCor("laranja")
      setNotificacao(true)
      const timer = setTimeout(() => setNotificacao(false), 4000);
      return  () => clearTimeout(timer);
    }
    
    const horarioArrumado = horario1 + " - " + horario2;
    setHorarios([...horarios, horarioArrumado])
  }

  function removerHorario(horario) {
    setHorarios(horarios.filter((h) => {
      return h !== horario;
    }))
  }
  
  function tentarConfirmar() {
    if(listaDias && servico && horarios) {
      setModalConfirmar(true)
      return
    }
    setMsg("Existem campos ainda não preenchidos")
    setCor("laranja")
    setNotificacao(true)
    const timer = setTimeout(() => setNotificacao(false), 4000);
    return () => clearTimeout(timer);
  }

  function mapearDias(d) {
    switch(d) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-feira";
      case 2:
        return "Terça-feira";
      case 3: 
        return "Quarta-feira";
      case 4:
        return "Quinta-feira";
      case 5: 
        return "Sexta-feria";
      case 6:
        return "Sabado";
      default:
        return null;
    }
  }

  return (

    <main className={style.mainServico}>
      {modalServicos ?
        <MsgModal titulo="Selecione o serviço ofereçido" fechar={() => setModalServicos(false)} botoes={true}>
          <div className={style.selectServico}>
            {tagsServicos.map((serv, i) => {
              return (
                <div key={i} onClick={() => escolherServ(serv)} className={style.tagServico}>
                  <p>{serv}</p>
                </div>
              )
            })}
          </div>
        </MsgModal> : null
      }
      {modalConfirmar ?
        <MsgModal titulo={"Confirmar alterações"} fechar={() => setModalConfirmar(false)}>
            <div className={style.configurar}>
              <h3>Deseja confirmar essas configurações do seu serviço?</h3>
              <p className={style.infoExemplo}>- Serviço oferecido: </p>
                {servico ? <li className={style.exemplo}>{servico}</li> : null}
              <p className={style.infoExemplo}>- Dias de folga: </p>
                {listaDias.map((d) => {
                  return <li className={style.exemplo}>{mapearDias(d)}</li>
                })}
              <p className={style.infoExemplo}>- Horarios diponiveis: </p>
                {horarios.map((h) => {
                  return <li className={style.exemplo}>{h}</li>
                })}
              <p className={style.infoExemplo}>- Disponivel: </p>
            </div>
        </MsgModal> : null
      }
      {notificacao ?
        <Notificacao msg={msg} cor={cor}/> : null
      }
      <TituloTelas texto="Configure seus" destaque="Serviços!" pagina={props.pagina} />
      <div className={style.servicos}>
        <div className={style.acharServicos}>
          <div className={style.filtrosDias}>
            <h2>Tipos de serviços oferecidos:</h2>
            <div className={style.botaoCont}>
              <div className={style.botao}>
                {!servico ?
                  <button onClick={() => setModalServicos(true)}>
                    <img src={maisIcon} alt="" />
                  </button> : null
                }
              </div>
              {servico ? 
                <div className={style.botaoRemover}>
                  <button onClick={() => setServico('')}>
                    <img src={menosIcon} alt="" />
                  </button>
                  <p>{servico}</p>
                </div> : null
              }
            </div>
          </div>

          <div className={style.filtrosAgenda}>
            <h2>Seu Calendario:</h2>
            <div className={style.Calendario}>
              <Calendario dia={null} folgaDias={listaDias} passado={true}/>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.mainDias}>
          <h2>Selecione os dias da sua folga:</h2>
          <div className={style.mainConteudo}>
            {dias.map((dia, i) => {
              return(
                <div style={{display: 'flex'}}>
                  <input id={i} key={i} type="checkbox" onChange={() => addListaDias(i)}></input>
                  <label htmlFor={i}>{dia}</label>
                </div>
              )
            })}

          </div>
          <div className={style.mainEditar}>
            <h2>Editar Horários:</h2>
          </div>


          <div className={style.conteudoEdit}>
            <div className={style.d}>
              <p>Das</p>
            </div>
            <div className={style.horario}>
              <input type="time" onChange={(e) => setHorario1(e.target.value)}/>
            </div>
            <div className={style.a}>
              <p>as</p>
            </div>
            <div className={style.horario}>
              <input type="time" onChange={(e) => setHorario2(e.target.value)}/>
            </div>
            <button onClick={() => adicionarHorario()}>
              <img className={style.imgMais} src={addHorario} alt="" />
            </button>
          </div>

          <div className={style.listaHorario}>
            {horarios.map((horario, i) => {
              return (
                <div key={i} className={style.conteudoLista}>
                  <button onClick={() => removerHorario(horario)}>
                      <img src={menosIconHorarios} alt="" />
                  </button>
                  <p>{horario}</p>
                </div>
              )
            })}
          </div>

          <div className={style.disponivel}>
            <h2>Disponivel:</h2>

            <div className={style.botaoDisponivel}>
              <label className={style.switch}>
                <input type="checkbox" onChange={() => setDisponivel(!disponivel)} defaultChecked={disponivel}/>
                <span className={`${style.slider} ${style.round}`}></span>
              </label>
            </div>


          </div>

          <div className={style.botaoConfirmar}>
            <BotaoCheio text="Confirmar mudanças" cor="azul" funcao={() => tentarConfirmar()} />
          </div>  

        </div>
      </div>
    </main>
  )
}

export default ConfServico;