function clearal(){
    document.getElementById("io").value = "";
}
function display(value){
    document.getElementById("io").value += value;
}
function calculate(){
    var x,y;
    x=document.getElementById("io").value;
    y=eval(x);
    document.getElementById("io").value = y;
}