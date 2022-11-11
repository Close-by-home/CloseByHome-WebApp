import { useState } from 'react';

import agenda from '../../../Data/agenda';
import Calendario from '../../ComponentsBibliotecas/calendario/Index';
import maisIcon from '../../../assets/icons/icon-mais.png';
import menosIcon from '../../../assets/icons/icon-menos.png';

import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css'; 





const ConfServico = (props) => {

  function botaoAdicionar(params) {
    console.log ("eu sou gatao")
  }

  function botaoRemover(params) {
    
  }
  return(
             
    <main className={ style.mainServico }>
          <TituloTelas texto="Configure seus" destaque="Serviços!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <div className={ style.acharServicos }>
          <div className={ style.filtrosDias }>
            <p>Tipos de serviços oferecidos:</p>
           <div className={style.botaoCont}>
           <div className={style.botao}>
          <button onClick={()=> botaoAdicionar()}>
            <img src={maisIcon} alt="" />
          </button>
              </div>            
                <div className={style.botaoRemover}>
                      <button onClick={()=> botaoRemover}>
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
            <hr/>
            <div className={style.mainDias}>
              <div className={style.mainConteudo}>
                <h2>Dias Selecionados:</h2>
                <p>22, 25, 30, 31</p>
              </div>
              <div className={style.mainEditar}>
                <h2>Editar Horários:</h2>
              </div>
                <div className={style.d}></div>
                <p>De</p>
                <div className={style.horario}>
                  09:00 
                </div>



            </div>
            
    
          
            
          
        
        </div>
        
    
             
      
    </main>
  )
}

export default ConfServico;