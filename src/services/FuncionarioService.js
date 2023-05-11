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
}