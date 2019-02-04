function validatePassword() {
    var p = document.getElementById('myPsw').value
    var pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);

    if(pattern.test(p)){
         return true;
    } else {
       
         alert("invalid passworld : must contain .... ");
    }
}

function validateFull() {
 var e = [document.getElementById('input1').value,document.getElementById('input2').value,document.getElementById('input3').value, document.getElementById('input4').value]
   
    
for (let i of e){
    if(i===""){
       
         alert("Empty")
         
    }
}
}