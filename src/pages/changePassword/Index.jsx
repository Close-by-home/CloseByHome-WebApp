import style from './Style.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/img/CloseByHomeLogo2.png';

import usuarioService from '../../services/UsuarioService';

const ChangePassword = () => {
  const { cpf } = useParams(); 
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function changePassword() {
    setLoading(true);
    setError(false);
    setSuccess(false);
    if(password === repeatPassword) {
      usuarioService.updateRecuperaSenha({
        cpf: cpf, 
        senhaNova: password
      }).then(() => {
        setSuccess(true);
        setLoading(false);
      }).catch(() => {
        setError(true);
        setLoading(false);
      })
      
    }
  }

  return(
    <main className={ style.main }>
      <div className={ style.container }>
        <img src={ logo } alt="" />
        <h2>Mudar Senha</h2>
        <label className={ style.labelSenha }>
          <p>Nova Senha:</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <label className={ style.labelSenha }>
          <p>Repita Senha:</p>
          <input type="password" onChange={(e) => setRepeatPassword(e.target.value)}/>
        </label>
        {loading && <div className={ style.loading }/>}
        {success && <p className={style.modificarText}>Senha Modificada com sucesso</p>}
        {error && <p style={{backgroundColor: "red"}} className={style.modificarText}>Algo deu errado, tente novamente mais tarde</p>}
        <button onClick={() => changePassword()} className={ style.changeSenha }>Trocar Senha</button>
      </div>
    </main>
  )
}

export default ChangePassword;