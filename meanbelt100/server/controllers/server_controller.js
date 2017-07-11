var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
module.exports = {
	register: function(req, res){
		console.log(req.body);
		var user = new User(req.body);
		user.save(function(err, data){
			console.log(data);
			if(err){
				console.log(err);
				res.status(400).send("User did not save.")
			}
			else{
				req.session.user = data;
				// console.log("Server controller line 13. Printing off session ", req.session.user);
				res.sendStatus(200);
			}
		})
	},
	login: function(req, res){
		User.findOne({name: req.body.name}, function(err, data){
			if(data == null){
				res.status(400).send("User not found.")
			}
			else{
				req.session.user = data;
				res.sendStatus(200);
			}
		})
	},
	current: function(req, res){
		if(req.session.user){
			res.json(req.session.user);
		}else{
			res.status(401).send("No user in session.");
		}
	},
	logout: function(req, res){
		req.session.destroy();
		res.redirect('/')
	},

	
	index: function(req,res){
		Question.find({}, function(err, results){
			res.json(results);
		})
	},
	getUsers: function(req,res){
		User.find({}, function(err, results){
			console.log('*************' + results)
			res.json(results);
		})
	},
	getAll: function(req,res){
		Question.find({}).populate('user').populate({path: 'answers', populate: {path: 'user'}}).exec(function(err,data){
			if(err){
				res.status(400).send(err);
			}
			else{
				console.log(data);
				res.json(data);
			}
		})
	},
	getOne: function(req,res){
		Question.findOne({_id: req.params._id}).populate({
			path: '_user questions',
			populate: {
				path: '_user answers',
				populate: { path: '_user'}
			}
		}).exec().then(function(err,data){
			if(err){
				res.status(400).send(err);
			}
			else {
				res.json(data);
			}
		})
	},
	getQuestions: function(req,res){
		Question.find({}).populate({path: 'answers',populate: {path: 'user'}}).exec(function(err,data){
			if(err){
				res.status(400).send("problem getting questions");
			}
			else{
				console.log("***************************")
				console.log(data);
				res.json(data);
			}
		})
	},
	createQuestion: function(req,res){
		var q = new Question(req.body);
		q.user = req.session.user._id;
		q.save(function(err,data){
			if(err){
				res.status(400).send("problem saving question");
			}
			else {
				res.sendStatus(200);
			}
		})
	},
	getQuestion: function(req,res){
		Question.findOne({_id: req.params.id}).populate('user').populate({path: 'answers', populate: {path: '_user'}}).exec(function(err,result){
			if(err){
				console.log(err);
				res.status(400).send("problem getting question");
			}
			else{

				res.json(result);


			}
		})
	},
	createAnswer: function(req, res){
		Question.findOne({_id: req.params.question_id}, function(err, question){
			if(err){
				res.status(400).send(err);
			}
			else{
				var answer = new Answer(req.body);
				answer._user = req.session.user;
				answer._question = question._id;
				answer.save(function(err, new_answer){
					if(err){
						res.status(400).send(err);
					}
					else{
						question.answers.push(new_answer);
						question.save(function(err, update_question){
							if(err){
								res.status(400).send(err);
							}
							else{
								res.sendStatus(200);
							}
						})
					}
				})
			}
		})


	},
	createLike: function(req, res){
		Answer.findOne({_id: req.params.id}, function(err, answer){
			console.log(answer + "****************");
			if(err){
				res.status(400).send(err);
			}
			else {
				answer.update({$inc: {likes: 1}}, function(err, answer){
					if(err) {
						res.status(400).send(err);
						console.log(err);
					}
					else{ 
						res.sendStatus(200);
					}
				})

			}
		})
	},
}
