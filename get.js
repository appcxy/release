var http = require('http');

var options = {
	host: 'jenkins',
	port: 80,
	path: '/view/StaticResource_Release/job/staticdeploy_sports/lastSuccessfulBuild/consoleText',
	method: 'GET',
	headers: {
	    'Content-Type': 'application/json'
	}
};


//get
http.get(options, function(res){
    var resData = '';

    res.on('data', function(data){
        resData += data;
        // console.log(data);
    });

    res.on('end', function() {
        callback( resData );
    });
});


//get version
function callback( data ){
	var ver = data.match(/VERSION=v_\d+/)[0].replace('VERSION=', '');
	console.log( ver );
}

