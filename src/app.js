export default class App {

  constructor(router) {
    this._router = router;
  }

  start() {
    // pegar o path name, processar e enviar para a View correta
    // this._router.routeTo('/teste*');
    this._router.routeTo('/teste/1');
  }
}
