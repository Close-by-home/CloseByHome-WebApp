import Services from "./Services";

class CondominioService extends Services {
  constructor() {
    super('/condominio')
  }

  sendResitroCondominio(request) {
    const { condominio } = request;
    this._url = `/cadastrar`;

    return this._api.post(this._url, condominio)
  }

  sendArqRegistro(request) {
    const {arq, codigo} = request;
    this._url = `/import-usuarios/${codigo}`;

    return this._api.post(this._url, arq)
  }
}

const condominioService = new CondominioService();

export default condominioService;