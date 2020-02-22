const httpRequest = require('./httpRequest');
const amityOAuthToken = "xoxb-886820869057-952795023555-ge807r77O0oP7ePH2F5j9eMn";

getListUsers = function(oAuthToken, next) {
    endPoint = `https://slack.com/api/users.list?token=${oAuthToken}&pretty=1`;
    httpRequest.get(endPoint, next);
}

postMessage = function(oAuthToken, channel, text, next) {
    endPoint = `https://slack.com/api/chat.postMessage?token=${oAuthToken}&channel=${channel}&text=${text}&pretty=1`;
    httpRequest.post(endPoint, null, next);
}

openConversation = function(oAuthToken, userID, next) {
    endPoint = `https://slack.com/api/conversations.open?token=${oAuthToken}&channel=${userID}&pretty=1`;
    httpRequest.post(endPoint, null, next);
}

openGroupConvsersation = function(oAuthToken, users, next) {
    usersArg = "";
    for (i = 0; i < users.length; i++) {
        usersArg += users[i] + "%2C";
    }
    usersArg = usersArg.substring(0, usersArg.length - 3);
    endPoint = `https://slack.com/api/conversations.open?token=${oAuthToken}&users=${usersArg}&pretty=1`;
    httpRequest.post(endPoint, null, next);
}
    
onboardUser = function(oAuthToken, userID, next) {
    endpoint = `https://slack.com/api/views.publish?token=${oAuthToken}&user_id=${userID}`
    httpRequest.post(endPoint, {
        "user_id": "YOUR_USER_ID",
        "view": { 
             "type":"home",
             "blocks":[ 
                { 
                   "type":"section",
                   "text":{ 
                      "type":"mrkdwn",
                      "text":"A simple stack of blocks for the simple sample Block Kit Home tab."
                   }
                },
                { 
                   "type":"actions",
                   "elements":[ 
                      { 
                         "type":"button",
                         "text":{ 
                            "type":"plain_text",
                            "text":"Action A",
                            "emoji":true
                         }
                      },
                      { 
                         "type":"button",
                         "text":{ 
                            "type":"plain_text",
                            "text":"Action B",
                            "emoji":true
                         }
                      }
                   ]
                }
             ]
          }
      }, next)
}

exports.getListUsers = getListUsers;
exports.postMessage = postMessage;
exports.openConversation = openConversation;
exports.openGroupConvsersation = openGroupConvsersation;

getListUsers(amityOAuthToken, function(response) {
    console.log(response);
});