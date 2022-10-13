import { Link } from 'react-router-dom';
import style from './Style.module.css'

import FormRegistro from '../../components/componentsPaginas/formRegistro/Index';

import logo from '../../assets/img/CloseByHomeLogo2.png';
import iconVoltar from '../../assets/icons/botaoVoltar.png';

const Registro = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.logo}>
          <Link to="/" className={style.voltar}>
            <div className={style.bolinha}>
              <img src={iconVoltar} alt="voltar" />
            </div>
          </Link>
          <div className={style.imgContainer}>
            <img src={logo} className={style.img} alt="" />
          </div>
        </div>
        <div className={style.form}>

        <FormRegistro></FormRegistro>

        </div>

      </main>
    </>
  );

}

export default Registro;