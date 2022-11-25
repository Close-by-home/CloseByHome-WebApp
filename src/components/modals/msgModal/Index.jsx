import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import BotaoVazio from '../../componentsReutilizacao/botaoVazio/Botao';

import style from './Style.module.css';

const MsgModal = (props) => {
  return(
    <div className={style.fundoModal}>
      <div className={style.modal}>
        <div className={style.titulo}>
          <h3>{props.titulo}</h3>
          <p onClick={props.fechar}>x</p>
        </div>
        <div className={style.corpo}>
          {props.children}
        </div>
        {!props.botoes ? 
          <div className={style.footer}>
            <BotaoVazio text="Cancelar" cor="azul" funcao={props.fechar} estilo={{fontSize: "1.2rem"}}/>
            <BotaoCheio text="Confirmar" cor="azul" funcao={props.confirmar} estilo={{fontSize: "1.2rem"}}/>
          </div> : null}
      </div>
    </div>
  )
}

export default MsgModal;