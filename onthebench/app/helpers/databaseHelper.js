var mongoose =  require('mongoose');

// db connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/onthebench", function(err, db) {
  if(!err) {
    console.log("Connected to mongodb at port 27017");
  } else {
    console.log(err);
  }
});

module.exports = mongoose;
