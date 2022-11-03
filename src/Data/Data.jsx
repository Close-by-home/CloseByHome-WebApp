import { createContext, useState } from "react";

const initialState = {
    nome: "Felipe Brito Andrade",
    bloco: "2b",
    apartamento: "33",
    codigoDoCondominio: "#DJTIE3445MFDS2",
    email: "felipe@gmail.com",
    numero: "11 951043020",
    img: "",
    servico: true
}

export const AppContext = createContext(initialState);

const Store = (props) => {
    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            nome: state.nome, 
            bloco: state.bloco,
            apartamento: state.apartamento,
            códigoDoCondominio: state.códigoDoCondominio,
            email: state.email,
            numero: state.numero,
            img: state.img,
            servico: state.servico,
            setNome: t => updateState('nome', t),
            setBloco: t => updateState('bloco', t),
            setApartamento: t => updateState('apartamento', t),
            setCodigoDoCondominio: t => updateState('codigoDoCondominio', t),
            setEmail: t => updateState('email', t),
            setNumero: t => updateState('numero', t),
            setImg: t => updateState('img', t),
            setServico: b => updateState('servico', b)
        }}>
         {props.children} 
        </AppContext.Provider>
        
    )
}

export default Store;