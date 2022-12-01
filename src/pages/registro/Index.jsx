import { Link, useNavigate } from 'react-router-dom';
import style from './Style.module.css'
import { useState } from 'react';

import FormRegistro from '../../components/componentsPaginas/formRegistro/Index';
import FormEnviarArq from '../../components/componentsPaginas/formEnviarArq/Index';
import FormConferirDados from '../../components/componentsPaginas/formConferirDados/Index';
import Notificacao from '../../components/modals/notificacao/Index';

import logo from '../../assets/img/CloseByHomeLogo2.png';
import iconVoltar from '../../assets/icons/botaoVoltar.png';


const Registro = () => {

  const [pagina, setPagina] = useState("registro");
  const [infoRegistro, setInfoRegistro] = useState({});
  const [msg, setMsg] = useState('');
  const [notificacao, setNotificacao] = useState(false);
  const cor = 'laranja';

  function renderizarPagina(newPage) {
    console.log(pagina)
    setPagina(newPage);
    console.log(pagina)
  }

  function abrirAviso(msg) {
    setMsg(msg)
    setNotificacao(true);
    const timer = setTimeout(() => setNotificacao(false), 4000)
    return () => clearTimeout(timer);
  }

  function pegarInfos(infos){
    setInfoRegistro ({...infoRegistro, ...infos})
  }

  return (
    <>
      {notificacao ? <Notificacao msg={msg} cor={cor}/> : null}
      <main className={style.main}>
        <div className={style.logo}>
          <Link to="/" className={style.voltar}>
            <div className={style.bolinha}>
              <img src={iconVoltar} alt="voltar" />
            </div>
          </Link>
          <div className={style.imgContainer}>
            <img src={logo} className={style.img} alt="" />
          </div>
        </div>
        <div className={style.form}>
          
       
       
        { pagina === "registro" && <FormRegistro pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {(infos)=> pegarInfos(infos)} aviso={(msg) => abrirAviso(msg)}></FormRegistro>}
        { pagina === "formEnviarArq" && <FormEnviarArq pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {(infos)=> pegarInfos(infos)} codCond = {infoRegistro} aviso={(msg) => abrirAviso(msg)}/>}
        { pagina === "conferirDados" && <FormConferirDados pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {infoRegistro} aviso={(msg) => abrirAviso(msg)}/>}

       
        
        </div>

      </main>
    </>
  );

}

export default Registro;