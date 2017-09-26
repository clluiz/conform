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
        console.log(`Router: Encaminhado para ${path}.`);
        history.pushState(undefined, undefined, path);

        // atualizar view com o template
        let template = `components/${this._routes.get(pattern)}`;
        fetch(template)
          .then(response => {
            response.text().then(html => {
              console.log(html);
              let range = document.createRange();
              let documentFragment = range.createContextualFragment(html);
              document.getElementById('app').appendChild(documentFragment);
            })
          })
          .catch(function(error){
            console.error('erro')
          });

        console.log(this._routes.get(pattern));
        return;
      }
    }
    history.pushState(undefined, undefined, '/');
  }
}
