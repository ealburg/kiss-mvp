/// intro.js

/*
    This is the introduction main menu screen to create
    with all the available option of what can be done
    with the app.
 */

var rl;
var mvp_fun = require("./start/_newmvp/start");
exports.setup = function(prl) {
    rl = prl;
    intro_text();
    isNewProject(rl);
};

function intro_text()
{
    console.log("/******************************************/");
    console.log("Keep It Simple - Minimal Viable Product");
    console.log("(or better known as KISS MVP)");
    console.log("");
    console.log("This tool is to help entreprenuers forget about the ");
    console.log("complexities of web development and get to the point");
    console.log("where they can test out their ideas to get valualbe");
    console.log("feedback prior to investing in expensive development!");
    console.log("");
    console.log("GET OUT OF THE BUILDING AND TEST!");
    console.log("/******************************************/");
    console.log("");
}

function isNewProject(rl)
{
  rl.question("Are You Starting a New MVP (yes/no)?  ", function(answer) {
  // TODO: Log the answer in a database
  if (answer == 'yes') {
      mvp_fun.createMVP(rl,false);
  }
  else if (answer == 'no'){
      rl.close();
  }
  else {
      console.log("huh?");
      isNewProject(rl);
  }
});
}

