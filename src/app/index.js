const express = require('express');
const requestIp = require('request-ip');
const time = require('express-timestamp')
const app = express();
const port = 8080;

app.use(time.init)
app.set('json spaces', 2)
app.get('/',function(request, response) {
   
    var clientIp = requestIp.getClientIp(request);
    response.json({timestamp:(request.timestamp), ip:(clientIp)})
  
});

app.listen(port,"0.0.0.0");
console.log (" Wapparticle41 webapp running ok")