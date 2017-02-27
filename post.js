var http = require('http');
var qs = require('querystring');

var params = {
	"parameter": [
		{"name": "branchname", "value": "master"},
		{"name": "release_path", "value": "/old/css/test"},
		{"name": "Remarks", "value": "old css test"},
		{"name": "qidongyonghu", "value": "garychen"}
	],
	"statusCode": "303",
	"redirectTo": "."
};

var post_data = {
	json: JSON.stringify(params),
	time: new Date().getTime()
};
var content = qs.stringify(post_data);
 
var options = {
	host: 'jenkins',
	port: 80,
	path: '/view/StaticResource_Release/job/staticdeploy_sports/build?delay=0sec',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': content.length
	}
};
console.log("post options:\n",options);
console.log("content:",content);
console.log("\n");

var req = http.request(options, function(res){
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
  var _data = '';
  res.on('data', function(chunk){
     _data += chunk;
  });

  res.on('end', function(){
     console.log( "\n--->>\nresult:", _data );
   });
});
 
req.write(content);
req.end();