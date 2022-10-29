import { createContext, useState } from "react";

const initialState = {
    nome: "",
    bloco: "",
    apartamento: "",
    códigoDoCondominio: "",
    email: "",
    numero: "",
    img: ""
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
            setNome: t => updateState('nome', t),
            setBloco: t => updateState('bloco',t),
            setApartamento: t => updateState('apartamento',t),
            setCodigoDoCondominio: t => updateState('codigoDoCondominio',t),
            setEmail: t => updateState('email',t),
            setNumero: t => updateState('numero',t),
            setImg: t => updateState('img',t),
        }}>
         {props.children} 
        </AppContext.Provider>
        
    )
}

export default Store;