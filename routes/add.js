var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
    var new_friend = {
        "name": request.query.name,
        "description": request.query.description,
        "imageURL": "http://lorempixel.com/400/400/people"
    };
    console.log(new_friend);
    data.friends.push(new_friend);
    response.render('index',data);
 }
