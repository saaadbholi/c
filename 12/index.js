
var ramadandate = new Date(2015, 5, 18);


var today = new Date();


var diffinms = today - ramadandate;



var daysPassed = Math.floor(diffinms / (1000 * 60 * 60 * 24));


alert(daysPassed + " days have passed since 1st Ramadan 2015");