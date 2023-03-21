import style from './Style.module.css';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import iconVoltar from '../../assets/icons/botaoVoltar.png';
import logo from '../../assets/img/CloseByHomeLogo2.png';
import Botao from '../../components/componentsReutilizacao/botaoCheio/Botao';
import InputLabel from '../../components/componentsReutilizacao/inputLabel/Index';

const ChangePassword = () => {
  const { id } = useParams(); 
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  function inputPassword(event) {
    setPassword(event.target.value);
  }

  function inputRepeatPassword(event) {
    setRepeatPassword(event.target.value);
  }

  return(
    <main className={ style.main }>
      <div className={ style.logo }>
        <Link to="/" className={ style.voltar }>
          <div className={ style.bolinha }>
            <img src={ iconVoltar } alt="voltar" />   
          </div>
        </Link>
        <div className={ style.imgContainer }>
          <img src={ logo } className={style.img} alt="" />  
        </div>
      </div>
      <div className={ style.form }>
        <div className={ style.formLogin }>
          <InputLabel text="Nova senha" type="password" valor={ inputPassword }/>
          <InputLabel text="Repita a senha" type="password" valor={ inputRepeatPassword }/>
          <Botao text="Mudar Senha" cor="azul"/>
        </div>
      </div>
    </main>
  )
}

export default ChangePassword;