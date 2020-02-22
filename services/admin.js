"use strict"

var deleteData = function (session, interestData, userData) {
    return session.run('MATCH (n) DETACH DELETE n',
    {}).then(results =>{
        console.log(results);
        throw{DELETED: 'Everything has been deleted.', status: 201}
    });
}

module.exports = {
    deleteData: deleteData,
};