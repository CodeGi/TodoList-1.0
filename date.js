module.exports.Date = function(){

let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
today.toLocaleDateString("en-US", options);

return today.toLocaleDateString("en-US", options);
};


exports.getDate = function(){

let today = new Date();
let options = { weekday: 'long'};
let date = today.toLocaleDateString("en-US", options);
return date;
}
