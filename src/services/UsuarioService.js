import Services from './Services';

class UsuarioService extends Services {
  constructor() {
    super("/usuario")
  }

  sendLogin(request) {
    const { login } = request;
    this._url = "/logar";


    return this._api.post(this._url, request);
  }

  sendCadastro(request) {
    const { condominio } = request;
    this._url = `/cadastrar/${'09520000'}`

    return this._api.post(this._url, condominio);
  }

  updateUser(request) {
    const { email, servico, recebe } = request;
    this._url = `/ativar-perfil=funcionario/${email}/${servico}/${recebe}`;

    return this._api.put(this._url); 
  }

  updateSenha(request) {
    const { email, senhaAtual, novaSenha } = request;
    this._url = `/atualizar-senha/${email}/${senhaAtual}/${novaSenha}`

    return this._api.put(this._url);
  }

  updateImagem(request) {
    const { cpf, email, img } = request;
    this._url = `/atualizar/imagem/${cpf}/${email}`;

    return this._api.put(this._url, {a: img})
  }

  updateNumero(request) {
    const {cpf, email, novoNum} = request;
    this._url = `/atualizar/telefone/${cpf}/${email}/${novoNum}`;

    return this._api.put(this._url);
  }

  updateEmail(request) {
    const {cpf, email, novoEmail} = request;
    this._url = `/atualizar/telefone/${cpf}/${email}/${novoEmail}`;

    return this._api.put(this._url);
  }

  updateRecuperaSenha(request) {
    const {cpf, senhaNova} = request;
    this._url = `/recuperar-senha/${cpf}/${senhaNova}`

    return this._api.put(this._url);
  }

}

const usuarioService = new UsuarioService();

export default usuarioService;