import { useState } from 'react';

import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormModSenha = () => {

    const [CODCOND, setCODCOND] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [NOVASENHA, setNOVASENHA] = useState("");
    const [REPSENHA, setREPSENHA] = useState("");
    

    function inputCodCond(event) {
        setCODCOND(event.target.value);
        console.log(CODCOND);
    }
    function inputEmail(event) {
        setEMAIL(event.target.value);
        console.log(EMAIL);
    }

    function inputNovaSenha(event) {
        setNOVASENHA(event.target.value);
        console.log(NOVASENHA);
    }


    function inputRepSenha(event) {
        setREPSENHA(event.target.value);
        console.log(REPSENHA);
    };

    
      return (

        <div>
    
        <h2>
          Mudar a senha
        </h2>
        
        <InputLabel text="Código do Condominio"  type="number" valor={inputCodCond}/>
        <InputLabel text="E-mail"  type="email" valor={inputEmail} />
        <InputLabel text="Nova Senha"  type="number" valor={inputNovaSenha}  />
        <InputLabel text="Repita a senha"  type ="number" valor={inputRepSenha} />
        

        <BotaoCheio text="Mudar Senha" cor="azul" />  
        </div>
      )
}

export default FormModSenha;