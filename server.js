var express = require('express'),
app = express();
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');


new WebpackDevServer(webpack(config), {
    publicPath: config.output.path,
    contentBase: "www"
    
  }).listen(process.env.PORT || 3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });


//app.set('port', process.env.PORT || 5000);
//
//
//
//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});