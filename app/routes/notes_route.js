'use strict'
var noteController = require('../controllers/notes_controller');


module.exports = function(router){
	console.log(router,'jfdhuduffk');
	router.route('/create')
		.post(noteController.addNote);
	router.route('/all')
	  .get(noteController.viewNotes);
	router.route('/note/:title')
	  .get(noteController.findNote);
	router.route('/update/:title')
		.put(noteController.updateNote);
	router.route('/delete/:title')
		.delete(noteController.deleteNote);
};



