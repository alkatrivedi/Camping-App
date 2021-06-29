var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350",
            description: "Bacon ipsum dolor amet leberkas pork loin shankle pork belly turkey doner swine boudin strip steak filet mignon. Shank porchetta turkey chuck bresaola cupim strip steak corned beef tongue pork loin biltong capicola pork belly meatball ham. Cupim biltong andouille short ribs strip steak pig tri-tip, sirloin landjaeger swine meatloaf. Kevin short loin corned beef, pancetta bacon pork belly alcatra pork. Ball tip andouille shank sausage. Venison doner short loin biltong rump burgdoggen salami, drumstick swine turducken bresaola spare ribs pork belly. Sausage pastrami hamburger tri-tip, chuck shankle pork belly ribeye turducken spare ribs tail.",
        },
        {
            name: "Desert Mesa",
            image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&h=350",
            description: "Bacon ipsum dolor amet leberkas pork loin shankle pork belly turkey doner swine boudin strip steak filet mignon. Shank porchetta turkey chuck bresaola cupim strip steak corned beef tongue pork loin biltong capicola pork belly meatball ham. Cupim biltong andouille short ribs strip steak pig tri-tip, sirloin landjaeger swine meatloaf. Kevin short loin corned beef, pancetta bacon pork belly alcatra pork. Ball tip andouille shank sausage. Venison doner short loin biltong rump burgdoggen salami, drumstick swine turducken bresaola spare ribs pork belly. Sausage pastrami hamburger tri-tip, chuck shankle pork belly ribeye turducken spare ribs tail.",
        },
        {
            name: "Canyon Floor",
            image: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&h=350",
            description: "Bacon ipsum dolor amet leberkas pork loin shankle pork belly turkey doner swine boudin strip steak filet mignon. Shank porchetta turkey chuck bresaola cupim strip steak corned beef tongue pork loin biltong capicola pork belly meatball ham. Cupim biltong andouille short ribs strip steak pig tri-tip, sirloin landjaeger swine meatloaf. Kevin short loin corned beef, pancetta bacon pork belly alcatra pork. Ball tip andouille shank sausage. Venison doner short loin biltong rump burgdoggen salami, drumstick swine turducken bresaola spare ribs pork belly. Sausage pastrami hamburger tri-tip, chuck shankle pork belly ribeye turducken spare ribs tail.",
        }
    ]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer",
                            }, function(err, comment) {
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            }
                        )
                }
            });
        });
    });
    // Add a few comments
}


module.exports = seedDB;