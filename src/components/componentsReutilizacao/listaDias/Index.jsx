import style from './Style.module.css';

const ListaDias = (props) => {
    return(
        <div className={style.conteudoLista}>
        <input type="checkbox"></input>
        <p>{props.dias}</p>
        </div>
    )
}

export default ListaDias;