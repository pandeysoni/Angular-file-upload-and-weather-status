var Weather = require('./weather.server.controller');

module.exports = function(app){
    app.get('/weather/:locationNumber', Weather.get);
}