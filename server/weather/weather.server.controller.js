var YQL = require('yql');

exports.get = function(req, res){	
	var query = new YQL('select * from weather.forecast where (location = '+req.params.locationNumber+')');
	query.exec(function(err, data) {
		var location = data.query.results.channel.location;
		var condition = data.query.results.channel.item.condition;
		console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
		return res.json({temp:  condition.temp})
	});
}