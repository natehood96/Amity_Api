handle = function(payload, next) {
    type = payload["type"];
    if (type == "url_verification") {
        next(payload["challenge"]);
    } else if (type == "event_callback") {
        eventHandler(payload);
        next(null);
    } else {
        //we need to at least send something back to slack...
        next(null);
    }
}

eventHandler = function(payload) {
    console.log(payload["event"]["type"]);
}

exports.handle = handle;