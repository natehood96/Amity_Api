var slackService = require('../services/slack');

exports.receive = function (req, res, next) {
    console.log(req.body);
    //If slack is giving us a URL verification challenge, we need to respond with the challenge value
    if (req.body["type"] == "url_verification") {
        res.send(req.body["challenge"]);
    }
    // slackService.handle(req.body, function(message) {
    //     if (message) {
    //         res.send(message);
    //     } else {
    //         //doesn't matter what we send back to slack. Just needs to be a 2xx code within three seconds...
    //         res.send('{"Message":"Thanks partner!"')
    //     }
    // });
    next();
};