const mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Palette');

var schema = new Schema({
	img: {data: Buffer, contentType: String, required: true},
	url: {type: String, required: true, trim: true},
	text: {type: String, required: true, trim: true}
})

var Portfolio = mongoose.model('Portfolio', schema);

mongoose.connection.on('open').then()