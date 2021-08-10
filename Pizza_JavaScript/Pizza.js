function getReceipt() {
    //initializes string so it can get passed from
    //function to function to grow to a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedsize = sizeArray[i].value;
            text1 = text1+selectedsize+"<br>";
        }
    }
    if (selectedsize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedsize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedsize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedsize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedsize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedsize+" = $"+sizeTotal+".00");
    console.log("size text1: " +text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};