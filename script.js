var currentDay = $("#currentDay");
var currentDateTime = moment();
var currentTime = moment();
var startTime = 9;
var endTime = 18;

// var setTime = moment().hour(9).minute(0);

// console.log(setTime.format("HH:mm"));


var randomTime = moment();
randomTime = randomTime.format("HH:mm");


currentDay.append(currentDateTime.format("[Today is ] dddd, MMMM Do <br><br> LT"));

var test = moment("2010-10-20").isSame("2009-12-31");
console.log(test);
var test2 = moment("2010-10-20").isSame("2010-10-20");
console.log(test2);

var hello = moment(currentDateTime.format("YYYY-MM-DD HH:mm")).isSame("21 PM","hour");

// console.log(currentDateTime.format("LT"));

// var hello2 = $("<p>");
// hello2.attr("id","hour-"+9);
// $(".container").append(hello2);
// $("#hour-9").append("shit");



// console.log(hello2);

// var hello3 = $("#hour-10");
// $("#hour-10").append("fuck");
// console.log(hello3);
// console.log(currentDateTime.format("YYYY-MM-DD HH:mm"));

for(var i=startTime; i<endTime; i++) {
    //creating div row
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id","hour-"+i);

    // creating div cloumn
    var divCol = $("<div>");
    var setTime = moment().hour(i).minute(0);
    divCol.addClass("col-md-1 hour");
    divCol.append(setTime.format("LT"));
    
    // creating text area
    var textArea = $("<textarea>");
    textArea.addClass("col-md-10 description");

    // creating button
    var btn = $("<button>");
    btn.addClass("btn saveBtn col-md-1");
    btn.attr("data-time","hour-"+i);

    // creating save icon
    var icon = $("<i>");
    icon.addClass("fas fa-save");

    // appending everything together
    divRow.append(divCol);
    divRow.append(textArea);
    btn.append(icon);
    divRow.append(btn);

    // appending the row to the container, displays what was created above
    $(".container").append(divRow);

    // checks to see what blocks are past present or future
    if(parseInt(setTime.format("H")) < parseInt(currentTime.format("H"))) {
        divRow.addClass("past");
    }
    else if(parseInt(setTime.format("H")) == parseInt(currentTime.format("H"))) {
        divRow.addClass("present");
    }
    else {
        divRow.addClass("future");
    }

    // console.log(setTime.format("H"));
    // console.log(currentTime.format("H"));
    // console.log(parseInt(setTime.format("H")) > parseInt(currentTime.format("H")));
    // console.log(typeof(currentTime))
    // console.log(typeof(setTime.format("HH")))
    // console.log(moment(currentTime).isSame(setTime.format("HH:mm"),"hour"));
}

$(".btn").on("click", function(){
    alert($(this).attr("data-time"));
})