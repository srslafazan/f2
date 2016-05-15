import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, '../../Client/build')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//
// Authentication
// -----------------------------------------------------------------------------
// TODO


//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (req, res, next) => {
	try {
		console.log('__dirname is ', __dirname);
		res.send('index.html');
	} catch(err) {
		next(err);
	}
});

//
// Error handling
// -----------------------------------------------------------------------------



//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
