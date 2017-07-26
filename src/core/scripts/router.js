export default class Router {

  constructor() {
    this._views = new Map();
  }

  register(url, template) {
    if (this._views.has(url)) {
      throw new Error(`${url} já existe.`);
    }
    this._views.set(url, template);
  }
}

