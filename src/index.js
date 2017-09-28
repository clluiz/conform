import App from './app';
import Router from './core/scripts/router';

const router = new Router();
router.register(/\/$/, 'login/login.html');
router.register(/\/teste$/, 'entrada/entrada.html');
router.register(/\/teste\/(\w*)$/, 'teste_parametro.html');

const app = new App(router);

app.start();
