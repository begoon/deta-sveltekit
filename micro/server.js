import express from 'express';
import serveIndex from 'serve-index';
import { handler } from './site/handler.js';

const app = express();

app.use(
	'/fs',
	express.static('/', { dotfiles: 'allow' }),
	serveIndex('/', { icons: true, hidden: true, view: 'details' })
);

app.get('/status', (req, res) => {
	res.end('OK');
});

app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening on port ' + port);
});
