import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarioService from '../../../services/UsuarioService';

import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormModSenha = () => {
  const navigate = useNavigate();

  const [SENHATUAL, setSENHATUAL] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [NOVASENHA, setNOVASENHA] = useState("");
  

  function inputSenhaAtual(event) {
    setSENHATUAL(event.target.value);
  }
  function inputEmail(event) {
    setEMAIL(event.target.value);
  }

  function inputNovaSenha(event) {
    setNOVASENHA(event.target.value);
  }
  
  
  async function atualizarSenha() {
    usuarioService.updateSenha({
      email: EMAIL,
      senhaAtual: SENHATUAL,
      novaSenha: NOVASENHA
    }).then(res => {
      console.log(res.data)
      navigate('/login')
    }).catch(err => {
      console.log(err)
    })
  }
  

  
    return (

      <div>
  
      <h2>
        Mudar a senha
      </h2>
      
      <InputLabel text="E-mail" type="email" valor={inputEmail} />
      <InputLabel text="Senha Atual" type="text" valor={inputSenhaAtual}/>
      <InputLabel text="Nova Senha" type="password" valor={inputNovaSenha}  />

      <BotaoCheio text="Mudar Senha" cor="azul" funcao={atualizarSenha} />  
      </div>
    )
}

export default FormModSenha;