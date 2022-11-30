import { useState } from 'react';


import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import Notificacao from '../../modals/notificacao/Index';

import style from './Style.module.css';
import axios from 'axios';



const FormEnviarArq = (props) => {

  const [msg, setMsg] = useState("");
  const [novaClass, setNovaClass] = useState("");
  const [temArq, setTemArq] = useState(null); 
  const [notificacao, setNotificacao] = useState(false);
  

    async function EnviarArq(arq) {
      console.log(arq.name)
      if(arq.name.search("csv") > 0 || arq.name.search("xlsx") > 0) {
        console.log(arq)
        setTemArq(arq);
        // await axios.post('')     
      }
      


      else{
        setMsg("Infelizmente esse tipo de arquivo não é suportado")
      }
      }


      const Prosseguir = () => {
        props.pagina("conferirDados");

        props.passarInfos({nomeArq: temArq.name})
      }

      function hoverArq(e) {
        e.preventDefault();
        setNovaClass("hoverArq");
      }
    
      function hoverLeaveArq(e) {
        e.preventDefault();
        setNovaClass("");
    
      }
    
      function dropArq(e) {
        e.preventDefault();
        setNovaClass("");
        EnviarArq(e.dataTransfer.files[0]);
      }

return (
          
    <div className={style.tudo}>
     
        <p>Passos:</p>
        <div className={style.passos}>

        <div className={style.bolinha} >
        1
        </div>
      <div className={style.linhas}>----------</div>
      <div className={style.bolinhaSelecionada}>
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

    <div onDrop={(e) => dropArq(e)} onDragOver={(e) => hoverArq(e)} onDragLeave={(e) => hoverLeaveArq(e)} className={style.enviarArq} >
            <input style={{display: "none"}} type="file" id="arq"  onChange={(e) => EnviarArq(e.target.files[0])}/>
            {temArq ? 
            <button onClick={() => setTemArq(null)}>{temArq.name} X</button>
            : 
            <label  htmlFor="arq">Arreste seu arquivo aqui</label>}
            
          </div>

          <div style={{height:"1em"}}></div>
          <div className={style.botao}>
        <BotaoCheio text="Prosseguir" cor="azul" funcao={Prosseguir} />
        </div> 
    </div>
    
  )
}

export default FormEnviarArq;