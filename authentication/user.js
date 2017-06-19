const mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Palette');

var schema = new Schema({
	username: {type: String, required: true, trim: true},
	password: {type: String, required: true, trim: true}
	superUser: {type: Boolean, required: true, defualt: false}
})

var User = mongoose.model('User', schema);

var user = new User({
	username: 'eserilev',
	password: 'spider37#',
	superUser: true
});

user.save().then((doc) => {
	console.log('User saved', doc);
}, (e) => {
	console.log('Unable to save user');
})