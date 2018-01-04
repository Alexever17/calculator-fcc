var zero = document.getElementById("n0");
var one = document.querySelector("#n1");
var two = document.querySelector("#n2");
var three = document.querySelector("#n3");
var four = document.querySelector("#n4");
var five = document.querySelector("#n5");
var six = document.querySelector("#n6");
var seven = document.querySelector("#n7");
var eight = document.querySelector("#n8");
var nine = document.querySelector("#n9");

var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var dot = document.querySelector("#dot");
var deleteButton = document.querySelector("#delete");
var equal = document.querySelector("#equal");
var output = document.querySelector("#output");

var outputStorage = "";

zero.addEventListener("click", function(){ numberClick(0); });
one.addEventListener("click", function(){ numberClick(1); });
two.addEventListener("click", function(){ numberClick(2); });
three.addEventListener("click", function(){ numberClick(3); });
four.addEventListener("click", function(){ numberClick(4); });
five.addEventListener("click", function(){ numberClick(5); });
six.addEventListener("click", function(){ numberClick(6); });
seven.addEventListener("click", function(){ numberClick(7); });
eight.addEventListener("click", function(){ numberClick(8); });
nine.addEventListener("click", function(){ numberClick(9); });

plus.addEventListener("click", function(){ mathClick(0); });
minus.addEventListener("click", function(){ mathClick(1); });
multiply.addEventListener("click", function(){ mathClick(2); });
divide.addEventListener("click", function(){ mathClick(3); });
dot.addEventListener("click", function(){ dotClick(); });
deleteButton.addEventListener("click", function(){ deleteClick(); });
equal.addEventListener("click", function(){ equalClick(); });


function numberClick(n) {
    if (n == 0 && outputStorage == "") {
        return;
    }
    outputStorage += n.toString();
    print();
}

function mathClick(id) {
    switch(id) {
    case 0:
        numberCheck();
        outputStorage += "+";
        print();
        break;
    case 1:
        numberCheck();
        outputStorage += "-";
        print();
        break;
    case 2:
        numberCheck();
        outputStorage += "*";
        print();
        break;
    case 3:
        numberCheck();
        outputStorage += "/";
        print();
        break;
    }
}

function numberCheck() {
    var check = outputStorage.slice(-1);
    if (/[0-9]/.test(check)) {
        console.log(check);
    } else {
        console.log("fuck");
    }
}

function dotClick() {

}

function deleteClick() {
    console.log("hy");
    outputStorage = "";
    print();
}

function equalClick() {

}

function print() {
    if (outputStorage.length > 60) {
        output.innerHTML = "Number Overflow";
    } else if(outputStorage == ""){
        output.innerHTML = "0";
    } else {
        output.innerHTML = outputStorage;
    }
}
