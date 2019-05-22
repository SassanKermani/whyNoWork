/*============================
=            Vars            =
============================*/
const http = require(`http`);
const fs = require(`fs`);

let userData = {};
/*=====  End of Vars  ======*/

http.createServer( (req, res)=>{

	console.log(`req.method: ${req.method}`);
	console.log(`req.url: ${req.url}`);

	switch(true){
		case(req.method == `GET`):
			fs.readFile(`./page.html`, (err, data)=>{
				if(err){ throw err};
				res.write(data);
				res.end();
			})
			break;
	}

}).listen(3000);