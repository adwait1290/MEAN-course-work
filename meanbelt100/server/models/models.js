var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type:String},
	questions: [{type:Schema.Types.ObjectId, ref: "Question"}],
	answers: [{type:Schema.Types.ObjectId, ref: "Answer"}]
	}, {timestamps:true})
mongoose.model("User", UserSchema);
var QuestionSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: "User"},
	content: {type:String, required: true, min:[10, "Your content must atleast be 10 characters!"]},
	description: {type:String},
	answers: [{type:Schema.Types.ObjectId, ref: "Answer"}]
}, {timestamps:true})

mongoose.model('Question', QuestionSchema);
var AnswerSchema = new mongoose.Schema({
	_user: {type:Schema.Types.ObjectId, ref: "User"},
	_question: {type:Schema.Types.ObjectId, ref: "Question"},
	content: {type:String, required: true,  min:[5, "Your answer must atleast be 5 characters!"]},
	support: {type:String},
	likes: {type:Number, default: 0}
}, {timestamps: true})

mongoose.model("Answer", AnswerSchema);