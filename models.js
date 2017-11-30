const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.connect(mongoUrl, function(err, results) {
    if(err){
      console.log(err);
    }
    else{
      console.log("connected to database")
    }
    });


    var plumbersShifts = mongoose.model('plumbersShifts', {
        name: String,
         days: Object,
         slots: Object
  });


    return {
      plumbersShifts
    }
}
