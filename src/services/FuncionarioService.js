import Services from "./Services";

class FuncionarioService extends Services {
  constructor() {
    super("/funcionario");
  }

  getFuncionario(request) {
    const { codigoDoCondominio } = request;
    this._url = `/${codigoDoCondominio}`

    return this._api.get(this._url);
  }

  getFuncionarioServico(request) {
    const {servico, codigoDoCondominio} = request;
    this._url = `/buscaPorServico/${servico}/${codigoDoCondominio}`
  
    return this._api.get(this._url);
  }

  getFuncionarioNome(request) {
    const {nome, codigoDoCondominio} = request;
    this._url = `/buscaPorNome/${nome}/${codigoDoCondominio}`
  }
}

const funcionarioService = new FuncionarioService();

export default funcionarioService;