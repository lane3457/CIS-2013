       function gas() {
     
     var miles = prompt("Enter miles driven");
     //miles = parseFloat(miles);
      var gallons = prompt("Enter gallons of gas used");
      //gallons = parseFloat(gallons);
    var mpg = parseFloat(miles/gallons);
           
     alert("Miles per gallon = " + mpg);
       }
gas();