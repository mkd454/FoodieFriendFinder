// LOAD DATA
var userData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });
  
  // API POST Requests
  app.post("/api/friends", function(req,res) {
    res.send("Sending you over data buddy")
    userData.push(req.body);
    
    // Logic
    var userScores = [];
    var finalScores = [];
  });



};
