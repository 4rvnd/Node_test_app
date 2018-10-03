const express = require('express');
const app = express();



app.get('/', (req, res, next) => 
	{
		res.send(req.headers.one);
		next();
	}

);

app.post('/', (req, res, next) => 
	{
		res.send(req.headers.one);
		next();
	}
);

app.listen(8080, (err) =>
	{
		if(err) console.log(err);
		else console.log("Server Listening!");
	}
);