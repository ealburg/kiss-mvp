//// create new project

var fs = require("fs");

function congratsUser() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log("Congratulations on taking the first steps to creating your MVP");
    console.log("Let's get started by creating a new directory where your MVP will live");
    console.log("");

}

function createMVP (rl, hide_congrats, cb) {
    if (!hide_congrats) congratsUser();
    rl.question("Enter a Directory Name Here >>  ", function(dir){

        var exists = fs.existsSync(process.cwd() + "/" + dir);
        if (!exists) {
            fs.mkdirSync(process.cwd()+"/"+dir);
            rl.close();
        }
        else {
            console.log("The directory must not exists... try again");
            createMVP(rl, true);
        }
    });
}

exports.createMVP = createMVP;
