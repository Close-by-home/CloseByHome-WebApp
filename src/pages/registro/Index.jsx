import { Link, useNavigate } from 'react-router-dom';
import style from './Style.module.css'
import { useState } from 'react';

import FormRegistro from '../../components/componentsPaginas/formRegistro/Index';
import FormEnviarArq from '../../components/componentsPaginas/formEnviarArq/Index';
import FormConferirDados from '../../components/componentsPaginas/formConferirDados/Index';


import logo from '../../assets/img/CloseByHomeLogo2.png';
import iconVoltar from '../../assets/icons/botaoVoltar.png';


const Registro = () => {

  const [pagina, setPagina] = useState("registro");
  const [infoRegistro, setInfoRegistro] = useState({});

  function renderizarPagina(newPage) {
    console.log(pagina)
    setPagina(newPage);
    console.log(pagina)
  }

  function pegarInfos(infos){
    setInfoRegistro ({...infoRegistro, ...infos})

  }

  return (
    <>
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
          
       
       
        { pagina === "registro" && <FormRegistro pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {(infos)=> pegarInfos(infos)}></FormRegistro>}
        { pagina === "formEnviarArq" && <FormEnviarArq pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {(infos)=> pegarInfos(infos)} codCond = {infoRegistro}/>}
        { pagina === "conferirDados" && <FormConferirDados pagina={(newPage) => renderizarPagina(newPage)} passarInfos = {infoRegistro} />}

       
        
        </div>

      </main>
    </>
  );

}

export default Registro;