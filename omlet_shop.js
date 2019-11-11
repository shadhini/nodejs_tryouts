// Most of the web applications work with real time data and speed is important
// For applications like social networks which has a lot of requests coming in at once, nodejs is incredibly fast and efficient

function placeAnOrder(orderNumber) {
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function () {
        console.log("Delivered food order:", orderNumber)
    });
}

// Simulate a 5 second operation
// e.g. connecting to database (some time consuming operation)
function cookAndDeliverFood(callback) {
    // the callback is set of code (function) we wanna run after 5 seconds
    // the setTimeout function doesn't pause the program for 5 seconds or wait for 5 seconds
    // it just set a schedule, which should be done in 5 seconds
    setTimeout(callback, 5000);
}

// Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);