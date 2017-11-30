module.exports = function(models) {

    var plumbersFun = function(req, res, next) {

        var name = req.body.name;
        var email = req.body.email;
        var contact = req.body.contact;
        var slots = req.body.slot;
        var days = req.body.day
        //console.log(name);
        models.plumbersShifts.create({
                name: name,
                email: email,
                contact: contact,
                day: days,
                slot: slots
            },
            function(err, results) {
                if (err) {
                    console.log(err)
                } else {
                    res.json(results);
                }
            })
    }

    var findPlumbers = function(req, res, next) {
        models.plumbersShifts.find({}, function(err, results) {
            if (err) {
                console.log(err)
            } else {
                res.json(results)
            }
        })
    }

    var slotsAndDays = function(req, res, next) {
        var name = req.params.name
        var slotsTowork = req.params.slot
        var daysTowork = req.params.day

        models.plumbersShifts.find({
                name: name
            }, {
                slot: slotsTowork
            }, {
                day: daysTowork
            }, 
            function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results)
                }
            })
    }

    return {
        plumbersFun,
        findPlumbers,
        slotsAndDays
    }
}
