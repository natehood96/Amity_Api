var slackService = require('../services/slack');

exports.receive = function (req, res, next) {
    console.log(req.body);
    slackService.handle(req.body, function(message) {
        if (message) {
            res.send(message);
        } else {
            //doesn't matter what we send back to slack. Just needs to be a 2xx code within three seconds...
            res.send('{"Message":"Thanks partner!"')
        }
    });
    next();
};