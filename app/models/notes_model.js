var mongoose = require ('mongoose');
var schema = mongoose.Schema;
var noteSchema = new schema({
	title:{
		type: String,
		index:{unique:true}
	},
	content:{
		type: String
	}

})

module.exports = mongoose.model('Note', noteSchema)