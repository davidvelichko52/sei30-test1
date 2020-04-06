var form = document.querySelector("form");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var div = document.getElementById("sum");



plus.addEventListener('click', function (e){

    e.preventDefault();
    var inputNum = parseInt(form.elements["input"].value);
    var startNum = parseInt(document.getElementById("sum").innerHTML);
    var total = (inputNum + startNum);
    div.textContent = total;

    if(total >= 0){
        div.style.color = "black";
    }else{
        div.style.color = "red";
    }
   
});

minus.addEventListener('click', function (e){

    e.preventDefault();
    var inputNum = parseInt(form.elements["input"].value);
    var startNum = parseInt(document.getElementById("sum").innerHTML);
    var total = (startNum - inputNum );
    div.textContent = total;

        if(total >= 0){
            div.style.color = "black";
        }else{
        div.style.color = "red";
    }
   
});