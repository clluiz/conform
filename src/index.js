import App from './app';
import Router from './core/scripts/router';

const router = new Router();
router.register(/\/$/, 'login.html');
router.register(/\/teste$/, 'teste.html');
router.register(/\/teste2$/, 'teste.html');
router.register(/\/teste\/(\w*)$/, 'teste_parametro');

const app = new App(router);

app.start();
