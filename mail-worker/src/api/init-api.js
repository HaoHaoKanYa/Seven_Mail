import app from '../hono/hono';
import initService from '../init/init';

app.get('/init/:secret', (c) => {
	return initService.init(c);
})
