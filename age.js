
function years () {
  var age= prompt("how old are you");
    var weekAge = parseFloat(age * 52);
    var ageDays = parseFloat(age * 365.25);
    var fortnighAge = parseFloat(ageDays/14); 
    var monthAge = parseFloat(age*12);

alert("You are " + age +" years old" +  ", You are "+ monthAge + " Months Old" + ", You are " + fortnighAge + " fortnights old" + ", You are  " + weekAge + " weeks old" + ", You are " + ageDays + " days old" );
}

years();