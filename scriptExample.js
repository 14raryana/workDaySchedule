$(".saveBtn").on("click", function(){
    // Pull value from the textarea of chosen save button. This will serve as the value for out setItem
    var value
    
    // Pull the id of the clicked element to serve as the id
    var time

    // This is where you will save the data to local storage
    localStorage.setItem()
})


// Function to update the color of the time display
function hourUpdater() {
    var currentTime = moment().hours()
    
    // pull the id from each id within the time columns
    var block = 

    $(".time-block").each(function(){
        
        // take the value frome each id and setting to the variable block. HINT parseInt
        var block = $()

        // if statments to ask: Is the current time before the block? after the block or equal to the block

        // in each if statement you will need to add a class and remove a class
        if(block < currentTime) {
            // add the class of past to that element

        }
        
    })

}


hourUpdater()

var interval = setInterval(hourUpdater, 15000);


// here we need to access the values from localstorage and GET the times to display them on screen
$(".hour-9")

