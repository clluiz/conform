export default class Path {

  constructor(path) {
    this._path = path;
  }

  match(pattern) {
    return this._path.match(pattern);
  }
}
