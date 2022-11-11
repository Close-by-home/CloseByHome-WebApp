import { useState } from 'react';

import agenda from '../../../Data/agenda';
import Calendario from '../../ComponentsBibliotecas/calendario/Index';
import maisIcon from '../../../assets/icons/icon-mais.png';
import menosIcon from '../../../assets/icons/icon-menos.png';
import relogioIcon from '../../../assets/icons/relogio.png';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import ListaHorario from '../../componentsReutilizacao/listaHorarios/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import ListaDias from '../../componentsReutilizacao/listaDias/Index';

import style from './Style.module.css';





const ConfServico = (props) => {

  const horarios = [
    "09 : 00 - 10 : 00"
  ]

  const dias = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ]

  function botaoAdicionar(params) {

  }

  function botaoRemover(params) {

  }

  function botaoAdicionarHorario(params) {

  }

  function botaoRemoverHorario(params) {

  }


  return (

    <main className={style.mainServico}>
      <TituloTelas texto="Configure seus" destaque="Serviços!" usuario="Usuario" pagina={props.pagina} />
      <div className={style.servicos}>
        <div className={style.acharServicos}>
          <div className={style.filtrosDias}>
            <p>Tipos de serviços oferecidos:</p>
            <div className={style.botaoCont}>
              <div className={style.botao}>
                <button onClick={() => botaoAdicionar()}>
                  <img src={maisIcon} alt="" />
                </button>
              </div>
              <div className={style.botaoRemover}>
                <button onClick={() => botaoRemover}>
                  <img src={menosIcon} alt="" />
                </button>
                <p>Pedreiro</p>
              </div>
            </div>
          </div>

          <div className={style.filtrosAgenda}>
            <p>Tipos de serviços oferecidos:</p>
            <div className={style.Calendario}>
              <Calendario>
              </Calendario>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.mainDias}>
          <h2>Selecione os dias da sua folga:</h2>
            <div className={style.mainConteudo}>
            {dias.map((dias) => {
              return <ListaDias dias={dias} />
            })}

          </div>
          <div className={style.mainEditar}>
            <h2>Editar Horários:</h2>
          </div>


          <div className={style.conteudoEdit}>
            <div className={style.d}></div>
            <p>De</p>
            <div className={style.horario}>
              <p>09:00</p>
              <img src={relogioIcon} />
            </div>



            <div className={style.a}></div>
            <p>a</p>
            <div className={style.horario2}>
              <p>10:00</p>
              <img src={relogioIcon} />
            </div>
            <button onClick={() => botaoAdicionarHorario()}>
              <img className={style.imgMais} src={maisIcon} alt="" />
            </button>

          </div>
          <div>
            {horarios.map((horario) => {
              return <ListaHorario horario={horario} />
            })}
          </div>

          <div className={style.disponivel}>
            <h3>Disponivel:</h3>


            <div className={style.botaoDisponivel}>
              <label className={style.switch}>
                <input type="checkbox" onChange={() => console.log("teste")} />
                <span className={`${style.slider} ${style.round}`}></span>
              </label>
            </div>


          </div>

          <div className={style.botaoConfirmar}>
            <BotaoCheio text="Confirmar mudanças" cor="azul" />
          </div>  

        </div>
      </div>
    </main>
  )
}

export default ConfServico;