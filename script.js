
function calculate(){
    let a=parseInt(document.getElementById('bookOne').value);
    let b=parseInt(document.getElementById('bookTwo').value);
    let c=parseInt(document.getElementById('bookThree').value);
    let d=parseInt(document.getElementById('bookFour').value);
    let e=parseInt(document.getElementById('bookFive').value);
    if (a>100 || b>100 || c>100 || d>100 || e>100) {
        alert("Please enter correct value");
    }
    else{
        let obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
       let per=obtain/500*100;
       document.getElementById("per").innerHTML=per;
       if (a>33 && b>33 && c>33 && d>33 && e>33) {
        document.getElementById("remarks").innerHTML="<span style='color:green'>'PASS'</span>";
       }
       else {
        document.getElementById("remarks").innerHTML="<span style='color:red'>'FAIL'</span>";
       }
       if (per>=80 && per<=100) {
        document.getElementById("grade").textContent="A+"
       }
       else if (per>=70 && per<80){
        document.getElementById("grade").textContent="A"
       }
       else if (per>=60 && per<70){
        document.getElementById("grade").textContent="A-"
       }
       else if (per>=50 && per<60){
        document.getElementById("grade").textContent="B"
       }
       else if (per>=40 && per<50){
        document.getElementById("grade").textContent="C"
       }
       else if (per>=33 && per<40){
        document.getElementById("grade").textContent="D"
       }
       else {
        document.getElementById("grade").textContent="F"
       }
    }
}