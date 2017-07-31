import App from './app';
import Router from './core/scripts/router';

const router = new Router();
router.register('/', 'login.html');
router.register('/teste', 'teste.html');

const app = new App(router);

app.start();
