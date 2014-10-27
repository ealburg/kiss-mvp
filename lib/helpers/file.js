//// file helper

var fs = require('fs');

function createFolder(folder_path, cb) {

    if (fs.existsSync(folder_path)) {
        cb(false);
    }
    else {
        fs.mkdirSync(folder_path);
        cb(true);
    }
}

exports.createFolder = createFolder;