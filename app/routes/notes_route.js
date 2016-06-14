'use strict'
var noteController = require('../controllers/notes_controller');


module.exports = function(router){
	console.log(router,'jfdhuduffk');
	router.route('/create')
		.post(noteController.addNote);
	router.route('/all')
	  .get(noteController.viewNotes);
	  router.route('/searchByTitle')
	  .get(noteController.findNote);
};



