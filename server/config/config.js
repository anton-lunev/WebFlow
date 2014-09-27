var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://localhost/webflow",
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: "mongodb://root:Hammer728746@ds039550.mongolab.com:39550/webflow",
        port: process.env.PORT || 3030
    }
};