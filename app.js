const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const items= [];  //global variable of items array with one value inserted.
const workItems = []; /*global array for our work page to have its own list and array of items.
wait wait wait wait, but arrays keep changing constantly, you cant make em a const@!????
*/
app.use(express.static("public")); //this allows us to put static css and images in our node.

app.get("/" , function(req , res){

const day = date.getDate();

res.render("list", {aTitle: day , listArray: items});
});

app.post("/" , function(req , res){
  let item = req.body.addStuff; //our param when someone types something in the form textbox
  if (req.body.list === "Work") { /*
    if in the FORM in the html, so if
     name="list" value=<%= aTitle %> is titled as work, then:

*/
    workItems.push(item); /* push item (which is req.body.addStuff) to the array of [] workItems,
    which is located in the app.get for "work" function hence, */
    res.redirect("/work"); //wil travel to the /work page.
  } else { //otherwise, if on any other page...
    items.push(item); //push to the array of [] items, located in localhost:3000
    res.redirect("/"); //and travel there.
  }

});





app.get("/work" , function(req , res ){

  res.render("work", {aTitle: "Work List" , listArray: workItems}); /*
the EJS engine finds work folder in views, finds atitle in the EJS which corrosponds to wor
k list on JS "it is equal to a string, can be equal to anything." and listArray is from the
EJS file work or  list, which contains a new empty array called workItems that we globally
defined above. this new array is for stuff to put in our work page.
  */
});


app.get("/about" , function(req , res ){ //made an about page here.

  res.render("about");
});


app.listen(3000 , function(){ /* an Express mandatory command so app will listen through
  a port */

console.log("server up and running on TCP local host port 3000");
//above is a log to the hyper terminal if actually listening on the port, then we get this above.
});
