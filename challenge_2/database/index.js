const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/challenge2';
// const mongoUri = 'mongodb://172.17.0.2/davidcheng1290';
const db = mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

const commentSection = new mongoose.Schema({
  id: Number,
  recipeName: String,
});

const Comments = mongoose.model('info', commentSection);

module.exports.Comments = Comments;
