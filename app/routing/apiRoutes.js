// A POST routes `/api/friends`. This will be 
// used to handle incoming survey results. This 
// route will also be used to handle the 
// compatibility logic.

// LOAD DATA
var userData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });
};

// API POST Requests
app.post("/api/friends", function(req,res) {
  userData.push(req.body);
});