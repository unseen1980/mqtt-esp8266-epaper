var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.mqttdashboard.com');

client.on('connect', function () {
    client.subscribe('dublinjs');
})

client.on('message', function (topic, message) {
    console.log(topic.toString());
    console.log(message.toString());
})

setInterval(function () {
    client.publish('dublinjs', '{"date" : ' + Date.now() + '}')
}, 2000);
