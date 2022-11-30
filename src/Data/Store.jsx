import { createContext, useState } from "react";

const initialState = {
    nome: "",
    bloco: "",
    apartamento: "",
    codigoDoCondominio: "",
    email: "",
    numero: "",
    img: "https://cdn-icons-png.flaticon.com/512/1361/1361728.png",
    servico: false,
    infoRegistro: {}


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
            infoRegistro: state.infoRegistro,
            setInfoRegistro: (string) => updateState("infoRegistro", string),
            setNome: (string) => updateState("nome", string),
            setBloco: (string) => updateState("bloco", string),
            setApartamento: (string) => updateState("apartamento", string),
            setCodigoDoCondominio: (string) => updateState("codigoDoCondominio", string),
            setEmail: (string) => updateState("email", string),
            setNumero: (string) => updateState("numero", string),
            setImg: (string) => updateState("img", string),
            setServico: (string) => updateState("servico", string),
            // setAllInfos: setState()
            state, setState
        }}>
            {props.children} 
        </AppContext.Provider>
        
    )
}

export default Store;