import style from './Style.module.css'

const Notificacao = (props) => {
  return (
    <div className={ style.notificacao }>
      <div className={ style.contNoti }>
        <div className={ style.newNoti }></div>
        <p>{ props.notificacao }</p>
      </div>
      <span onClick={() => props.excluir(props.notificacao)}>x</span>
    </div>
  )
}

export default Notificacao;