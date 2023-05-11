import style from './Style.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/img/CloseByHomeLogo2.png';

const ChangePassword = () => {
  const { id } = useParams(); 
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

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
        <button className={ style.changeSenha }>Trocar Senha</button>
      </div>
    </main>
  )
}

export default ChangePassword;