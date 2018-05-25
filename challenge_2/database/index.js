const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/challenge2';
const db = mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

const paymentInfo = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: Number, 
  ccNum: Number,
  expireDate: String,
  cvv: Number,
  billingZip: Number
});

const Payment = mongoose.model('info', paymentInfo);

const save = (payment, callback) => {
  Payment.create(payment, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(response);
    }
  });
};

module.exports.Payment = Payment;
module.exports.save = save;
