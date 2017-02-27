var http = require('http');
var qs = require('querystring');
var co = require('co');
var prompt = require('co-prompt');
var exec = require('child_process').exec;
var opn = require('opn');


// co(function*(){
// 	var branch = yield prompt('branch name: ');
// 	var path = yield prompt('release path: ' );
// 	var note = yield prompt('remarks: ');
// 	var user = yield prompt('user: ');

// 	//post 发送
// 	var content = qs.stringify({
// 		json: JSON.stringify({
// 			"parameter": [
// 				{ "name": "branchname", "value": branch },
// 				{ "name": "release_path", "value": path },
// 				{ "name": "Remarks", "value": note },
// 				{ "name": "qidongyonghu", "value": user }
// 			],
// 			"statusCode": "303",
// 			"redirectTo": "."
// 		}),
// 		time: new Date().getTime()
// 	});
// 	var options = {
// 		host: 'jenkins',
// 		port: 80,
// 		path: '/view/StaticResource_Release/job/staticdeploy_sports/build?delay=0sec',
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			'Content-Length': content.length
// 		}
// 	};

// 	var req = http.request(options, function(res){
// 		var _data = '';

// 		res.on('data', function(chunk){
// 			_data += chunk;
// 		});

// 		res.on('end', function(){
// 			// console.log( "\n--->>\nresult:", _data );
// 		});
// 	});
// 	req.write(content);
// 	req.end();
// 	console.log( '\n' );
// 	console.log('发版中, 请稍后......');
	


// 	//get version
// 	setTimeout(()=>{
// 		http.get({
// 			host: 'jenkins',
// 			port: 80,
// 			path: '/view/StaticResource_Release/job/staticdeploy_sports/lastSuccessfulBuild/consoleText',
// 			method: 'GET',
// 			headers: {
// 			    'Content-Type': 'application/json'
// 			}
// 		}, function(res){
// 		    var resData = '';

// 		    res.on('data', function(data){
// 		        resData += data;
// 		        // console.log(data);
// 		    });

// 		    res.on('end', function() {
// 		        callback( resData );
// 		    });
// 		});

// 		function callback( data ){
// 			var ver = data.match(/VERSION=v_\d+/)[0].replace('VERSION=', '');
			
// 			exec('echo '+ ver +' | clip');
// 			console.log( '发版成功, 版本号: ', ver, ' (已粘贴到剪切板)' );
// 			opn('http://jenkins/view/StaticResource_Release/job/staticdeploy_sports/');
// 		}
// 	}, 1000 * 60 * 1);



// 	process.stdin.pause();
// });


