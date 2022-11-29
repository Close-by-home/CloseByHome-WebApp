
import { AppContext } from '../../../Data/Store';
import { useContext } from 'react';


import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css';


const ConferirDados = () => {

    const {infoRegistro} = useContext(AppContext);


return (
          
    <div className={style.tudo}>
     
        <p>Passos:</p>
        <div className={style.passos}>

        <div className={style.bolinha} >
        1
        </div>
      <div className={style.linhas}>----------</div>
      <div className={style.bolinha}>
        2
      </div>
      <div className={style.linhas}>----------</div>
      <div className={style.bolinhaSelecionada}>
        3
      </div>

      </div>

    
    <h2>
      Confira os dados!
    </h2>

    <p>{infoRegistro.cnpj}</p>
        
  

          <div style={{height:"1em"}}></div>
          <div className={style.botao}>
        <BotaoCheio text="Prosseguir" cor="azul"/>
        </div> 
    </div>
    
  )
}

export default ConferirDados;