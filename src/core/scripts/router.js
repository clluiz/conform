import Path from './path';

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
    const p = new Path(path);
    for (const pattern of this._routes.keys()) {
      if (p.match(pattern)) {
        console.log(this._routes.get(pattern));
      }
    }
  }
}
