//const regexFragments = /\/[(^:)a-zA-Z0-9-]{1,}/g;

export default class Path {

  constructor(path) {
    this._path = path;
  }

  match(pattern) {
    return this._path.match(pattern);
  }
}
