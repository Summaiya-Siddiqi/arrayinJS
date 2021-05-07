// ARRAY

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// we made a empty array of studentname to use it to store name in future

var studentName=[];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// In JS object we have property and its value e.g Name : "SUMMAIYA"

var studentnameObject = {};

// 3. Declare and initialize a strings array.

var stringArray=[];
var stringArray=["HTML","CSS","JAVASCRIPT"];


// 4. Declare and initialize a numbers array.

var numericArray=[];
var numericArray=[11,12,13,14,15];


// 5. Declare and initialize a boolean array.
 
var booleanArray=[];
var booleanArray=[true,false,false,true];


// 6. Declare and initialize a mixed array.

var mixedArray=[];
var mixedArray=["HTML",11,"JAVASCRIPT",true,9,false];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser

function greet(){
  
  var qualifications =[ "SSC","HSC","BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification</h1> ");
document.write(
"1) "+qualifications[0]+"</br>"+ "2) "+qualifications[1]+"</br>"+
"3) "+qualifications[2]+"</br>"+"4) "+qualifications[3]+"</br>"+"5) "+qualifications[4]+"</br>"+
"6) "+qualifications[5]+"</br>"+"7) "+qualifications[6]+"</br>"+"8) "+qualifications[7]+"</br> </br> </br>");
}

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

function myscore(){
var studentnames =["Michael","John","Tony"];
var score=[320,230,480];
for(var i = 0; i < studentnames.length; i++) {
    document.write("Score of " +studentnames[i] +" is " +score[i] + ".Percentage : " + (score[i] / 500) * 100 + "%" + "<br>") ;
  }
}


// document.write("Score of "+stdname[0]+" is "+ score[0]+"."+"Percentage:"+ score[0]/500*100+"%"+"</br>");
// document.write("Score of "+stdname[1]+" is "+ score[1]+"."+"Percentage:"+ score[1]/500*100+"%"+"</br>");
// document.write("Score of "+stdname[2]+" is "+ score[2]+"."+"Percentage:"+ score[2]/500*100+"%"+"</br>");



// 9. Initialize an array with color names. Display the array
// elements in your browser.

function mcolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
document.write(colors );
}

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

function ncolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
var addcolor =prompt("Enter the color you want to add in the beginning of array \n  colors =[Red, Blue, Green, Purple, Pink]");
colors.unshift(addcolor);
document.write(colors);
}

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

function ocolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink" ];
var lastcolor =prompt("Enter the color you want to add in the end of array \n  colors =[Red, Blue, Green, Purple, Pink]");
colors.push(lastcolor);
document.write(colors);
}

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

function pcolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
var morecolor =prompt("Enter the color you want to add in the beginning of array \n  colors =[Red, Blue, Green, Purple, Pink]");
var onemorecolor =prompt("Enter the color you want to add in the beginning of array");
colors.unshift(morecolor);
colors.unshift(onemorecolor);
document.write(colors);
}


// d. Delete the first color in the array. Display the updated
// array in your browser.

function qcolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
  document.write(colors +"<br>");
colors.shift(colors);
document.write("<h3>After deleting</h3>");
document.write(colors +"<br>");
}

// e. Delete the last color in the array. Display the updated
// array in your browser.

function rcolor(){  
var colors =[ "Red","Blue","Green","Purple","Pink"];
document.write(colors+"<br>");
colors.pop(colors);
document.write("<h3>After deleting</h3>");
document.write(colors+"<br>");
}

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

function scolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
var userone =parseInt(prompt("Enter the index in integer  where you want to add  in the array \n  colors =[Red, Blue, Green, Purple, Pink] "));
var usertwo =parseInt(prompt("Enter 0 because you are not removing the element in splice method"));
var userthree =prompt("Enter  color name to be add in the array \n  colors =[Red, Blue, Green, Purple, Pink] ");
  colors.splice(userone,usertwo ,userthree);
document.write(colors);
}

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

function tcolor(){
  var colors =[ "Red","Blue","Green","Purple","Pink"];
var userone =parseInt(prompt("Enter the index  in integer from you want to delete in the array \n  colors =[Red, Blue, Green, Purple, Pink] "));
var usertwo =parseInt(prompt("Enter how many element to be delete from the array \n  colors =[Red, Blue, Green, Purple, Pink] "));
document.write(colors+"<br>"+"<h3>After deleting</h3> <br>")
colors.splice(userone,usertwo);

document.write(colors);
}



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
function starray(){

var studentscore =[320,230,480,120];
studentscore.sort();
document.write("Score of Students:"+ studentscore +"</br>");
document.write("Ordered Score of Students:"+studentscore.sort());
}

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
function cityarray(){
var citynames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedcities = citynames.slice(2,4);
document.write("Cities List: <br>"+citynames + "<br>");
document.write("Selected Cities List: <br>"+selectedcities);
}



// 12 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
function stringarray(){ 
var arr = ["This","is", "my", "cat"];
var string = arr.join("  ");
document.write("Array: <br>"+ arr + "<br>");
document.write("String: <br>"+ string);
}

// 13  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

function fifoarray(){
  var device=["Keyboard","Mouse","Printer","Moniter"];
  document.write("Devices: <br>"+device + "<br> <br>");
 for(var i =0;i<device.length;i++){
   document.write("Out: <br>"+device[i]+"<br>");
 }


}

// 14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
//   First Out)

function lifoarray(){
  var device=["Keyboard","Mouse","Printer","Moniter"];
  document.write("Devices: <br>"+device + "<br> <br>");
  var reversearray = device.reverse();
  for(i=0;i<reversearray.length;i++){
    document.write("Out: <br>"+reversearray[i]+"<br>");
  }

}





// 15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

//Answer on index.html file
















