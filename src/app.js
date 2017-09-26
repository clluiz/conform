export default class App {

  constructor(router) {
    this._router = router;
    window.onpopstate = event => {
      console.log(event);
    }
  }

  start() {
    // pegar o path name, processar e renderizar a view correta
    this._router.routeTo(window.location.pathname);
  }
}
