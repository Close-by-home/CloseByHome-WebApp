import style from './Style.module.css';

const ServicosPerfil = (props) => {
  return (
    <div onClick={() => props.link('servico')} className={ style.slide } style={{backgroundImage: `url(${props.img})`}}>
      <div className={ style.filtro }>
        <h3>{ props.msg }</h3>
      </div>
    </div>
  )
}

export default ServicosPerfil;