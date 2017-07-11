var serverController = require('../controllers/server_controller.js')

module.exports = function(app){
	app.post('/register', serverController.register);
	app.post('/login', serverController.login);
	app.get('/logout', serverController.logout);
	app.get('/current', serverController.current);
	app.get('/index', serverController.index);
	app.get('/questions', serverController.getQuestions);
	app.post('/new_question', serverController.createQuestion);
	app.get('/questions/:id', serverController.getAll);
	app.get('/questions/answer/:id', serverController.getQuestion);
	app.post('/answer/:question_id', serverController.createAnswer);
	app.post('/like/:id', serverController.createLike);
	app.get('/users', serverController.getUsers);
	// app.get('/posts', serverController.getPosts);
	// app.post('/post', serverController.createPost);
	// app.post('/comment/:post_id', serverController.createComment);
	// /new_question
	// /question/:id
	// /question/:q_id/new_answer
}