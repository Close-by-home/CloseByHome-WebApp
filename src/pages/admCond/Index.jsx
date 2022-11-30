import { useState } from 'react';

import Sidebar from '../../components/componentsPaginas/sidebarAdm/Index';
import FormCadastro from '../../components/componentsPaginas/formCadastro/Index';


import style from './Style.module.css';

const AdmCondominio = () => {
  const [pagina, setPagina] = useState("home");

  function renderizarPagina(newPage) {
    setPagina(newPage);
  }

  return(
    <main className={ style.main }>
      <Sidebar pagina={ renderizarPagina } estado={ pagina }/>
      
      <div className={ style.form }>
        <FormCadastro />
      </div>

      </main>
  )
}

export default AdmCondominio;