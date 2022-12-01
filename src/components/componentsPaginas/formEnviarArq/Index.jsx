import { useState } from 'react';


import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import Notificacao from '../../modals/notificacao/Index';

import style from './Style.module.css';
import axios from 'axios';



const FormEnviarArq = (props) => {

  
  const [msg, setMsg] = useState("");
  const [novaClass, setNovaClass] = useState("");
  const [notificacao, setNotificacao] = useState(false);
  const [download, setDownload] = useState('');
  const [count, setCount] = useState(0);
 


  async function EnviarArq(arq) {
    console.log(arq.name)
    if (arq.name.search("csv") > 0) {
      console.log(arq)
      setTemArq(arq);
      // await axios.post('')   
      const formData = new FormData();
      formData.append("novosUsuarios", arq);  
    
      console.log(props.codCond.CODIGO, formData)


    await axios.post(`http://localhost:8080/condominio/import-usuarios/${props.codCond.CODIGO}`, formData)
    .then(res => {
      console.log(res.data)
      
    }).catch(err => {
      console.log(err)
    })}
    else {
      setMsg("Infelizmente esse tipo de arquivo não é suportado")
    }
    
  }




  function prosseguir(pagina) {
    props.pagina(pagina);
    if(temArq) {
      props.passarInfos({ nomeArq: temArq.name })
    }

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

  
  const urlDownload = 'http://localhost:8080/condominio/arquivo-exemplo'
  

  return (

    <div className={style.tudo}>

      <p>Passos:</p>
      <div className={style.passos}>

        <div className={style.bolinha} >
          1
        </div>

        <div className={style.linhas}>----</div>
        <div className={style.bolinhaSelecionada}>
          2
        </div>
        <div className={style.linhas}>----</div>
        <div className={style.bolinha}>
          3
        </div>


      </div>


      <h2>
        Registre seus moradores!
      </h2>

      <div className={style.centralizar}>
      <p className={style.textoArq}>Use o nosso modelo para registro</p>
      <p className={style.modeloArq}  onClick={() => {setDownload(urlDownload)
      setCount((old) => old +1);
      }}>Modelo registro</p>
      { download && <iframe src={download+'?c' + count} style={{display:"none"}}></iframe>}

      <div onDrop={(e) => dropArq(e)} onDragOver={(e) => hoverArq(e)} onDragLeave={(e) => hoverLeaveArq(e)} className={style.enviarArq} >
        <input style={{ display: "none" }} type="file" id="arq" onChange={(e) => EnviarArq(e.target.files[0])} />
        {temArq ?
          <button onClick={() => setTemArq(null)}>{temArq.name} X</button>
          :
          <label htmlFor="arq">Arreste seu arquivo aqui</label>}

      </div>
      </div>
      
      <div className={style.botao}>
        <BotaoCheio text="Retornar" cor="azul" funcao={() => prosseguir("registro")} />
        <BotaoCheio text="Prosseguir" cor="azul" funcao={() => prosseguir("conferirDados")} />
        </div> 

    </div>

  )
}

export default FormEnviarArq;