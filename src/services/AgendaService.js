import Services from "./Services";

class AgendaService extends Services {
  constructor() {
    super("/agenda")
  }

  getAgenda(request) {
    const { cpfUser, cpf, diaSelect } = request;
    this._url = `/${cpfUser}/${cpf}/${diaSelect}T17%3A09%3A42.411`;

    return this._api.get(this._url);
  }

  getDia(request) {
    const { cpf } = request;
    this._url = `/${cpf}`

    return this._api.get(this._url);
  }

  getPorCPF(request) {
    const { cpf } = request;
    this._url = `/buscarPorCPF/${cpf}`;

    return this._api.get(this._url);
  }
}

const agendaService = new AgendaService();

export default agendaService;