import style from './Style.module.css'

const Botao = ({ text, cor }) => {
  return (
    <div className={ `${style.bordBotao} ${style[cor]}` }>
      <button className={style.botaoVazio} >
        <p>{ text }</p>
      </button>
    </div>
  )
}

export default Botao;