// see for screenshot:
//     https://twitter.com/paul_irish/status/829090506084749312 
// values are in ms in chrome 58, but seconds in chrome <58: 
//     https://github.com/ChromeDevTools/devtools-frontend/issues/14#issuecomment-279891454

const http = require('http');

function requestHandler(request, response) {
	const headers = {
		'Server-Timing': `
		  sql-1=0.1; "MySQL lookup Server",
		  sql-2=0.9; "MySQL shard Server #1",
		  other=0.2; "other thing",
		  cpu=1.23; "Total CPU"
		`.replace(/\n/g, '')
	};

	response.writeHead(200, headers);
	response.write('');
	return setTimeout(_ => {
		response.end();
	}, 1230)
}

http.createServer(requestHandler)
	.listen(8082)
	.on('error', console.error);
