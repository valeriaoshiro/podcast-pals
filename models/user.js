var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;


var userSchema = new Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  lists: [{type: Schema.Types.ObjectId, ref: 'Podcast'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  // this will be set to the current document
  var user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // override the user provided password with the hash
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);
