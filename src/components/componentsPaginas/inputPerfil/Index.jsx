import style from './Style.module.css';

const InputPerfil = (props) => {
  return (
    <div className={style.input} style={props.style}>
      <label htmlFor="">{props.texto}:</label>
      <input 
      onKeyDown={(e) => props.funcao(e.key)}
      onChange={(e) => props.mudarValor(e.target.value)}
      type={props.tipo}
      value={props.valor}
      disabled={props.desativar} />
    </div>
  )
}

export default InputPerfil;