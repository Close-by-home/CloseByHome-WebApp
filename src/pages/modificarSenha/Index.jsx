import { Link } from 'react-router-dom';
import style from './Style.module.css'


import FormModSenha from '../../components/componentsPaginas/formMudSenha/Index';

import logo from '../../assets/img/CloseByHomeLogo2.png';
import iconVoltar from '../../assets/icons/botaoVoltar.png';

const ModSenha = () => {
        return (
            <>
              <main className={style.main}>
                <div className={style.logo}>
                  <Link to="/login" className={style.voltar}>
                    <div className={style.bolinha}>
                      <img src={iconVoltar} alt="voltar" />
                    </div>
                  </Link>
                  <div className={style.imgContainer}>
                    <img src={logo} className={style.img} alt="" />
                  </div>
                </div>
                <div className={style.form}>
        
                <FormModSenha></FormModSenha>
        
                </div>
        
              </main>
            </>
          );
}

export default ModSenha;