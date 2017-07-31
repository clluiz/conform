export default class Route {

  constructor(path) {
    this._path = path;
  }

  match(pattern) {
    return this._path === pattern;
  }
}
