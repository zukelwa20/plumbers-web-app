module.exports = function(models) {

var plumbersFun = function(req, res, next){

var name = req.body.name
var slots = req.body.days
console.log(name);
  models.plumbersShifts.create({
                  name:name
                },
              function(err, results) {
                  if (err) {
                      console.log(err)
                  } else {
                      res.json(results);
                  }
})
}

var findPlumbers = function(req, res, next){
  models.plumbersShifts.find({}, function(err, results){
    if(err){
    console.log(err)
    }
    else {
      res.json(results)
    }
  })
}

return{
  plumbersFun,
  findPlumbers
}
}
