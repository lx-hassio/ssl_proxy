var fs = require('fs'),
httpProxy = require('http-proxy');

var $host = process.argv[2] || 'localhost';
var $port = process.argv[3] || 9000;
var $privateKey = process.argv[4] || './private.key';
var $certificate = process.argv[5] || './certificate.crt';
var $proxyPort = process.argv[6] || 8888;


httpProxy.createServer({
    target: {
      host: $host,
      port: $port
    },
    ssl: {
      key: fs.readFileSync($privateKey, 'utf8'),
      cert: fs.readFileSync($certificate, 'utf8')
    }
  }).listen($proxyPort);

  console.log(`Listening on port ${$proxyPort}`);