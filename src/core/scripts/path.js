const regexParam = /^:/;

export default class Path {

  constructor(path) {
    this._path = path;
  }

  match(pattern) {
    if (this._path.toLowerCase() === pattern.toLowerCase()) {
      return true;
    } else if (this._path.length === pattern.length) {
      return true;
    }
    return false;
  }
}
