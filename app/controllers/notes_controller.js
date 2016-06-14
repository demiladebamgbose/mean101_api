var Note = require ('../models/notes_model');
noteController = {};
noteController.addNote = function(req, res){
	Note.findOne({title: req.body.title}, function(err, title){
		console.log(req.body.title, 'dfdgfghh');
		if(title){
			console.log(title, "fvfvfvfv");
			res.json({
				success:false,
				message: 'title taken'
			});
		}
		else{
			Note.create(req.body, function(err, note){
				if(err){
					res.json(err);
				}
				console.log("note created");
				return res.json(note);
			});
		}
	});
};


noteController.viewNotes = function(req, res){
	console.log('in');
	Note.find({}).exec(function(err, notes){
		if(err){
			return res.json(err);
		}
		return res.json(notes);
	});
};

noteController.findNote = function(req, res){
	Note.find({title: req.body.title}, function(err, note){
		if(err){
			return res.json(err);
		}
		return res.json(note);
	});
};

module.exports = noteController;