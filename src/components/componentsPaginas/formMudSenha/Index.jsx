import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormModSenha = () => {
  const navigate = useNavigate();

  const [CODCOND, setCODCOND] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [NOVASENHA, setNOVASENHA] = useState("");
  const [REPSENHA, setREPSENHA] = useState("");
  

  function inputCodCond(event) {
      setCODCOND(event.target.value);
  }
  function inputEmail(event) {
      setEMAIL(event.target.value);
  }

  function inputNovaSenha(event) {
      setNOVASENHA(event.target.value);
  }


  function inputRepSenha(event) {
      setREPSENHA(event.target.value);
  }
  
  
  async function atualizarSenha() {
    if(NOVASENHA === REPSENHA) {
      await axios.put(
        `http://localhost:8080/usuario/atualizar-senha-esquecida/${CODCOND}/${EMAIL}/${NOVASENHA}`
      ).then(res => {
        console.log(res.data)
        navigate('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
  

  
    return (

      <div>
  
      <h2>
        Mudar a senha
      </h2>
      
      <InputLabel text="Código do Condominio"  type="text" valor={inputCodCond}/>
      <InputLabel text="E-mail"  type="email" valor={inputEmail} />
      <InputLabel text="Nova Senha"  type="password" valor={inputNovaSenha}  />
      <InputLabel text="Repita a senha"  type="password" valor={inputRepSenha} />
      

      <BotaoCheio text="Mudar Senha" cor="azul" funcao={atualizarSenha} />  
      </div>
    )
}

export default FormModSenha;