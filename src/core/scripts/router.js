import Route from './route';

export default class Router {

  constructor() {
    this._routes = new Map();
  }

  register(pattern, template) {
    if (this._routes.has(pattern)) {
      throw new Error(`${pattern} já existe.`);
    }
    this._routes.set(pattern, template);
  }

  routeTo(path) {
    const p = new Route(path);
    for (const entry of this._routes.keys()) {
      if (p.match(entry)) {
        console.log(this._routes.get(entry));
      }
    }
  }
}
