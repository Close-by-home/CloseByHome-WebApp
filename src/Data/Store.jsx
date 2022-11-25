import { createContext, useState } from "react";

const initialState = {
    nome: "Felipe Brito Andrade",
    bloco: "2b",
    apartamento: "33",
    codigoDoCondominio: "#DJTIE3445MFDS2",
    email: "felipe@gmail.com",
    numero: "11 951043020",
    img: "https://cdn-icons-png.flaticon.com/512/1361/1361728.png",
    servico: false
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
            codigoDoCondominio: state.codigoDoCondominio,
            email: state.email,
            numero: state.numero,
            img: state.img,
            servico: state.servico,
            setNome: (n) => updateState("nome", n),
            setBloco: (b) => updateState("bloco", b),
            setApartamento: (a) => updateState("apartamento", a),
            setCodigoDoCondominio: (c) => updateState("codigoDoCondominio", c),
            setEmail: (e) => updateState("email", e),
            setNumero: (n) => updateState("numero", n),
            setImg: (i) => updateState("img", i),
            setServico: (s) => updateState("servico", s)
        }}>
            {props.children} 
        </AppContext.Provider>
        
    )
}

export default Store;