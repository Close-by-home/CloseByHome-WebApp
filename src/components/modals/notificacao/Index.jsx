import style from './Style.module.css';

const Notificacao = (props) => {
  return (
    <div className={`${style.notificacao} ${style[props.cor]}`}>
      <p>{props.msg}</p>
    </div>
  )
}

export default Notificacao;