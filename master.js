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
var previous = document.querySelector("#previous");

var outputStorage = "";
var outputLimit = 14;
let isEqualClicked = false;

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
    if(isEqualClicked === true){
        outputStorage = "";
        isEqualClicked = false;
    }
  checkLimit();
    
    console.log(n);
    if (n == 0 && outputStorage == "") {
        return;
    }
    if(outputStorage.length < outputLimit){
    outputStorage += n.toString();
    print();
    }else{
       limit();
    }
}

function mathClick(id) {
    isEqualClicked = false;
    var check = false;

    switch(id) {
        
    case 0:
        checkLimit()
        check = numberCheck();
        if (check) {
            if(outputStorage.length < outputLimit){
            outputStorage += "+";
            print();
        } else{
                limit();
            }
        }
        break;
    case 1:
    checkLimit();
        check = numberCheck();
        if (check) {
            if(outputStorage.length < outputLimit){
            outputStorage += "-";
            print();
            }else{
                limit();
            }
        }
        break;
    case 2:
    checkLimit();

        check = numberCheck();
        
        if (check) {
            if(outputStorage.length < outputLimit){
            outputStorage += "*";
            print();
        }else{
            limit();
        }
    }
        break;
    case 3:
    checkLimit();
        check = numberCheck();
        if (check) {
            if(outputStorage.length < outputLimit){
            outputStorage += "/";
            print();
        }else{
            limit();
        }
        break;
    }
}
}

function numberCheck() {
    var object = outputStorage.slice(-1);
    if (/[0-9]/.test(object)) {
        return true;
    } else {
        return false;
    }
}

function dotClick() {
    checkLimit();
    check = numberCheck();
    if (check) {
        if(outputStorage.length < outputLimit){
        outputStorage += ".";
        print();
    }else{
        limit();
    }
}
}

function deleteClick() {
    console.log("hy");
    outputStorage = "";
    print();
}

function equalClick() {
    if(isEqualClicked ===false){
    previous.innerHTML = outputStorage;
    isEqualClicked = true;
    }
    var numbers = [];
    var numberCount = 0;
    var characters = [];
    var characterCount = 0;
    var throughput = outputStorage;
    var char = 0;

    check = numberCheck();
    if (!check) {
        throughput = throughput.slice(0,-1);
    }

    for (var i = 0; throughput.length > 0; i++) {
        char = throughput.search(/[^0-9]/);
        if (char == -1) {
            numbers[numberCount] = throughput.slice(0);
            break;
        } else {
            numbers[numberCount] = throughput.slice(0, char);
            numberCount += 1;
            throughput = throughput.slice(char);
        }
        characters[characterCount] = throughput.slice(0, 1);
        characterCount += 1;
        throughput = throughput.slice(1);
    }
    if (characters[(characterCount-1)] == "") {
        characters.splice(0, -1);
    }
    computations(numbers, characters);
}

function computations(numbers, characters) {
    var solvednumber = 0;
    while (numbers.length > 1) {
        numbers[0] = Number(numbers[0]);
        numbers[1] = Number(numbers[1]);
        if (characters[0] == "+") {
            numbers[1] = numbers[0] + numbers[1];
        } else if (characters[0] == "-") {
            numbers[1] = numbers[0] - numbers[1];
        } else if (characters[0] == "*") {
            numbers[1] = numbers[0] * numbers[1];
        } else if (characters[0] == "/") {
            numbers[1] = numbers[0] / numbers[1];
        } else {
            numbers[1] = numbers[0] + "." + numbers[1];
            numbers[1] = parseFloat(numbers[1]);
            
        }
        numbers.shift();
        characters.shift();
    }
    solvednumber = (Math.round(numbers[0]*100000)/100000);
    outputStorage = solvednumber.toString();
    print();
    console.log(outputStorage);
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

function checkLimit(){
    if(previous.innerHTML.indexOf('Digit Limit Met') != -1){
        previous.innerHTML = "0";
    }
}

function limit(){
    outputStorage = "";
    print();
    previous.innerHTML = 'Digit Limit Met';
}