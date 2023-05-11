import Services from "./Services";

class NotificacaoService extends Services {
  constructor() {
    super("/notificacao")
  }

  getNotificacao(request) {
    const { id } = request;
    this._url = `/${id}`;

    return this._api.get(this._url);
  }
}

const notificacaoService = new NotificacaoService();

export default notificacaoService;