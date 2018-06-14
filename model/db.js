var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongoTest:st!1Kzjy@cluster0-shard-00-00-usurw.mongodb.net:27017,cluster0-shard-00-01-usurw.mongodb.net:27017,cluster0-shard-00-02-usurw.mongodb.net:27017/mongoTest?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{ useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!')
});