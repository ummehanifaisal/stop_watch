//interval me aik or function bnta h jis m hum kaam krte h or phr function s nkl kr time dete h kb tk chlana h
//1000 means 1 sec...........................................

//setInterval(function(){
//    document.write('hello world') 
//    },1000)                           

// ya hum aese bhi bna skte h...............................

// function timer(){
//     document.write('hello')
// }
// setInterval(timer,4000)

//ye 4 second bd aik br chlega upr walo ki trh br br nh chlega.......................................

// setTimeout(function(){
//     document.write('hello')
// },4000)

//1 se counting chlani h............................................

// var num = 0
// setInterval(function(){
//     num++
//     console.log(num)
// },1000)


var hour = 0
var min = 0
var sec = 0

var gethour = document.getElementById('hour')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var interval;


function start(){
    interval = setInterval(function(){
        sec++
        getsec.innerHTML = sec
        if(sec >= 60){
            min++
            getmin.innerHTML = min
            sec = 0
        }
        else if(min >= 60){
            hour++
            gethour.innerHTML = hour
            min = 0
        }
    },1000)

    document.getElementById('ss').disabled = true
}

function stop(){
    clearInterval(interval)

    document.getElementById('ss').disabled = false
}

function reset(){
    hour = 0
    min = 0
    sec = 0
    gethour.innerHTML = hour
    getmin.innerHTML = min
    getsec.innerHTML = sec
}

