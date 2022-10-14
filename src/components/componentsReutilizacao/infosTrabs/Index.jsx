import style from './Style.module.css';

const InfosTrabs = () => {
  return (
    <main className={ style.main }>
      <div className={ style.imgUser }>
        <div className={ style.img }></div>
      </div>
      <div className={ style.infos }>
        <div className={ style.tag }>
          <div className="tagTrab"></div>
        </div>
      </div>
    </main>
  )
}

export default InfosTrabs