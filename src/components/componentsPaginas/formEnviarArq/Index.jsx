import { useState } from 'react';


import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css';
import axios from 'axios';



const FormEnviarArq = () => {

    async function EnviarArq(arq) {
        console.log(arq)
        
        await axios.post('')
    
        
      }

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
      <div className={style.bolinha}>
        3
      </div>

      </div>

    
    <h2>
      Registre seus moradores!
    </h2>
        
    <p className={style.textoArq}>Use o nosso modelo para registro</p>
   <p>Modelo registro</p>

    <div className={style.enviarArq} >
            <input style={{display: "none"}} type="file" id="arqImg" onChange={(e) => EnviarArq(e.target.files[0])}/>
            <label htmlFor="arqImg">Arreste seu arquivo aqui</label>
          </div>

          <div style={{height:"1em"}}></div>
          <div className={style.botao}>
        <BotaoCheio text="Prosseguir" cor="azul"/>
        </div> 
    </div>
    
  )
}

export default FormEnviarArq;