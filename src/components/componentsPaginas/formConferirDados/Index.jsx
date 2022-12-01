import { useNavigate } from 'react-router-dom';

import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css';

const ConferirDados = ({passarInfos, pagina}) => {
  const navigate = useNavigate();
    console.log(passarInfos, passarInfos.arq)


    const Confirmar = () => {
      navigate('/AdmCondominio');

    }

return (
          
    <div className={style.tudo}>
     
        <p>Passos:</p>
        <div className={style.passos}>

        <div className={style.bolinha} >
        1
        </div>
      <div className={style.linhas}>----</div>
      <div className={style.bolinha}>
        2
      </div>
      <div className={style.linhas}>----</div>
      <div className={style.bolinhaSelecionada}>
        3
      </div>

      </div>

    
    <h2>
      Confira os dados!
    </h2>

    <div className={style.informacoes}>
      <p>CNPJ: <span> {passarInfos.cnpj} </span></p>
      <p>CEP: <span>{passarInfos.cep} </span></p>
      <p>Email: <span> {passarInfos.emailSindico}</span></p>
      <p>Nome Sindico: <span> {passarInfos.sindico} </span></p>
      <p>Código Do Condominio: <span>{passarInfos.codigoCondominio}</span></p>
      <p>Telefone Condominio : <span>{passarInfos.telefone}</span></p>
      <p>Número: <span> {passarInfos.numero} </span></p>
      <p>Quantidade de Blocos:  <span> {passarInfos.cep} </span> </p>  
      <p>Registro moradores:  <span> {passarInfos.nomeArq} </span> </p>
    </div>
        
  

          <div style={{height:"1em"}}></div>
          <div className={style.botao}>
        <BotaoCheio text="Retornar" cor="azul" funcao={() => pagina("formEnviarArq")}/>
        <BotaoCheio text="Prosseguir" cor="azul" funcao={Confirmar}/>
        </div> 
    </div>
    
  )
}

export default ConferirDados;