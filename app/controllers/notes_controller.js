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
	Note.find({}).exec(function(err, notes){
		if(err){
			return res.json(err);
		}
		return res.json(notes);
	});
};

noteController.findNote = function(req, res){
	
	Note.find({title: req.params.title}, function(err, note){
		if(err){
			return res.json(err);
		}		return res.json(note);
	});
};

noteController.updateNote = function(req, res){
	Note.findOne({title: req.params.title}, function(err, title){
		if(title){
			Note.update({title: req.params.title}, req.body, function(err, note){
				if(err){
					res.json(err);
				}
				console.log('update');
				noteController.findNote(req,res);
			});
		}
		else{
			res.json({
				success: false,
				message: 'note not found'
			});
		}
	});
};

noteController.deleteNote = function(req, res){
	Note.remove({title: req.params.title},function(err, note){
		if(err){
			res.json(err);
		}
		else{
			res.json({
				success: true,
				message: 'note deleted'
			});
		}
	});
};
module.exports = noteController;