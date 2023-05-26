function suma(){
    let num1, num2, sum;
    num1 = parseInt(document.getElementById('num1').value) ;
    num2 = parseInt(document.getElementById('num2').value) ;
    sum=num1 + num2;
    
alert("la suma es = " + sum )
}

function resta(){
    let num1, num2, res;
    num1 = parseInt(document.getElementById('num1').value) ;
    num2 = parseInt(document.getElementById('num2').value) ;
    res=num1 - num2;
    
alert("la resta es = " + res )
}

function multiplicacion(){
    let num1, num2, mul;
    num1 = parseInt(document.getElementById('num1').value) ;
    num2 = parseInt(document.getElementById('num2').value) ;
    mul=num1 * num2;
    
alert("la multiplicacion es = " + mul )
}

function division(){
    let num1, num2,div;
    num1 = parseInt(document.getElementById('num1').value) ;
    num2 = parseInt(document.getElementById('num2').value) ;
    if (num2==0){
        alert("No se puede dividir entre cero")
    }
    else{
        div=num1 / num2;
    }
   
    
alert("La división es = " + div )


}