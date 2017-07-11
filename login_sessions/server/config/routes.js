var user = require('./../controllers/user.js');


module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/user', function(req, res) {
        user.read(req, res);
    });

    app.post('/user', function(req, res) {
        user.create(req, res);
    });

    app.get('/user/:id', function(req, res) {
        user.readOne(req, res);
    });
}