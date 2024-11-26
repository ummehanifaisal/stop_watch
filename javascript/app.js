// // // let student = {
// // //     name : "Hani",
// // //     course : "CS",
// // //     student_ID : "CS-116",
// // //     classes : ["HTML","JAVASCRIPT"],
// // //     fees : 5000
// // // }

// // // constructor
// // function Student(name, roll, course, classes, fees){
// //     this.name = name;
// //     this.course = course;
// //     this.classes = classes;
// //     this.roll = roll;
// //     this.fees = fees;
// // }
// // // new is object
// // var studentOne = new Student('mahwish','123','web',['thurs','sunday'], 500);
// // console.log(studentOne)
// // var studentOne = new Student('tina','129','web',['thurs','sunday'], 500);
// // var studentOne = new Student('sara','126','web',['thurs','sunday'], 500);

// // // class
// // class Teacher {
// //     constructor(name, empNum, salary){
// //         this.name = name
// //         this.empNum = empNum
// //         this.salary = salary
// //     }
// // }

// // let t1 = new Teacher("Faiza","123",23456)
// // console.log(t1)
// // let t2 = new Teacher("Iqra","123",23456)
// // let t3 = new Teacher("Hina","123",23456)

// // var plan1 = {
// //     name : "gold",
// //     price : 1000,
// //     calcDiscount : function(discount){
// //         let disc = plan1.price - (plan1.price * discount / 100)
// //         return disc
// //     }
// // }
// // console.log(plan1.name, plan1.calcDiscount(50))

// // var student = {
// //     name : "Hani",
// //     roll : "wma123",
// //     course : "webdev",
// //     fees : 500,
// //     displayName : function(){
// //         return `AOA ${student.name}`
// //     }
// // }
// // console.log(student.displayName())

// var scoreAvg = 23.89;
// var numberOfStars = Math.round(scoreAvg);
// console.log(numberOfStars); // output 24

// var scoreAvg = Math.round(.0678437);
// console.log(scoreAvg);  // output 0

// // math.ceil produce largest next integer eg: 3.4 to 4 round off kr k aik num bara

// var scoreAvg = Math.ceil(.000001);
// console.log(scoreAvg); // output 1

// var scoreAvg = Math.ceil(1.0001);
// console.log(scoreAvg); // output 2

// //.......................................................................
// // math.floor always round down and reurns the largest integer less than or equal to given num
// //round off kr k aik num chota ya is k equal like 1.99 to 1  

// var scoreAvg = Math.floor(.00001);
// console.log(scoreAvg); // output 0

// /*........................................................................
// var bigDecimal = 0.532;

// var improvedNum = (0.532 * 6) + 1;

// improvedNum is calculated as (0.532 * 6) + 1 = 3.192 + 1 = 4.192.
// var numberOfStars = Math.floor(4.192);

// Math.floor(4.192) rounds down to the nearest whole number, which is 4.
// console.log(numberOfStars);

// This prints 4 to the console. 
// */


//  var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 6) + 1;
//  var numberOfStars = Math.floor(improvedNum);
//  console.log(numberOfStars);

//  //..........................................................................
//  var result = "200" + 150; //concates in plus case 
//  console.log(result);

//  var profit = "200" - "duck"; //nan
//  console.log(profit);

//  var profitss = "200" - "150";
//  console.log(profitss); // 50

// //  var currentAge = prompt("Enter your age.");
// //  var yearsEligibleToVote = currentAge - 18;
// //  console.log(yearsEligibleToVote); // if user add 22 age so 22 - 18 = 4 is ans

// //  var currentAge = prompt("Enter your age.");
// //  var qualifying = currentAge + 1;
// //  console.log(qualifying); //user put age like 34 so output will be "341" contecate

// //  var currentAge = prompt("Enter your age."); // 34 input
// //  var qualifyingAge = parseInt(currentAge) + 1;
// //  console.log(qualifyingAge); // here parse int change the string to integer so output = "35"

//  var myInteger = parseInt("1.9999");
//  console.log(myInteger); // 1

//  var myFractional = parseFloat("1.9999");
//  console.log(myFractional); // 1.9999        

// // The following code converts the string "24" to the number 24.
//  var integerString = "24"
//  var num = Number(integerString);
//  console.log(num)  //24

// // The following code converts the string "24.9876" to the number 24.9876.
//  var floatingNumString = "24.9876";
//  var nums = Number(floatingNumString);
//  console.log(nums)  //24.9876

//  var numberAsNumber = 1234;
//  var numberAsString = numberAsNumber.toString();
//  console.log(numberAsString) //1234
// // The code above converts the number 1234 to the string "1234" and assigns it to the
// //variable numberAsString.

// // .toFixed for round off to specfic number
// var price = 9.95;
// var taxRate = 6.5/100;
// var total = price + (price * taxRate);
// console.log(total); //10.59675

// var prettyTotal = total.toFixed(2);
// console.log(prettyTotal); //10.60

// var currencyTotal = "$" + prettyTotal;
// console.log(currencyTotal); //$10.60

// var rightNow = new Date();
// console.log(rightNow); //Sat Dec 02 2023 20:36:58 GMT-0800 (Pacific Standard Time)

//  var theDay = rightNow.getDay();
//  console.log(theDay); //6

//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  console.log(now) //Sat Dec 02 2023 20:42:11 GMT-0800 (Pacific Standard Time)

//  var theDay = now.getDay();
//  console.log(theDay) //6

//  var nameOfToday = dayNames[theDay]
//  console.log(nameOfToday) // sat

//  var de = new Date()
//  var time = de.getTime();
//  console.log(time); //???

//  var d = new Date();
//  var currentMonth = d.getMonth();
//  console.log(currentMonth);//11 for dec

//  var dayOfMonth = d.getDate();
//  console.log(dayOfMonth)//2 dec today

//  var today = new Date();
//  var doomsday = new Date("June 30, 2035");
//  console.log(doomsday) //Sat Jun 30 2035 00:00:00 GMT-0700 (Pacific Daylight Time)

//  var msToday = today.getTime();
//  console.log(msToday) //1701580020483

//  var msDoomsday = doomsday.getTime();
//  console.log(msDoomsday) //2066799600000

//  var msDiff = msDoomsday - msToday;
//  console.log(msDiff) //365219523935

//  var dDiff = msDiff / (1000 * 60 * 60 * 24);
//  console.log(dDiff) //4227.07756819444

// //  var dDiff = Math.floor(dDiff);
// //  var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// //  console.log(msDiff)

// //  var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
// //  console.log(daysTillDoom)

// //  var c = new Date("July 21, 1983 13:25:00");
// //  console.log(c)

//  var d = new Date();
//  d.setMonth(7);
//  console.log(d) //Wed Aug 02 2023 21:14:02 GMT-0700 (Pacific Daylight Time)

//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("time: " + theHr + ":" + theMin); 