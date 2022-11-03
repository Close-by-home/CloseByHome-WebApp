import style from './Style.module.css'

const Botao = ({ text, cor, estilo }) => {
  return (
    <div className={ `${style.bordBotao} ${style[cor]}`}>
      <button className={style.botaoVazio} style={estilo}>
        <p>{ text }</p>
      </button>
    </div>
  )
}

export default Botao;