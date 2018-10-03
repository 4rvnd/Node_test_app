const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(morgan('dev'));

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(morgan('dev'));



app.get('/', (req, res, next) => 
	{	console.log(res.headers.one);
	
		// res.send(req.headers.one);
		// next();
		// res.send(req.headers.qwe);
		// next();
	}
);


	// app.post('/', (req, res, next) => 
	// 	{
	// 		res.send(req.headers.one + req.headers.qwe);
	// 		next();
	// 	}

	// 	);



// app.post('/', (req, res, next) => 
// 	{
// 		if(req.headers.one == '11'){
// 			res.send(req.headers.one);
// 		}
// 		else{
// 			res.send("Bad");
// 		next();
// 	}
// }
// );

app.listen(8080, (err) =>
	{
		if(err) console.log(err);
		else console.log("Server Listening!");
	}
);