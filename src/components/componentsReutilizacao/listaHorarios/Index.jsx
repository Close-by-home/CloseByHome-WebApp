import style from './Style.module.css';

import menosIcon from '../../../assets/icons/excluir_horario.png';


const ListaHorario = (props) => {
    return(
        <div className={style.conteudoLista}>
            <button>
                <img src={menosIcon} alt="" />
            </button>
            <p>{props.horario}</p>
        </div>
    )
}

export default ListaHorario;