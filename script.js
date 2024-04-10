function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(num1, num2, logic) {
    return logic(num1, num2);
}
/**
 * Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
 */
document.addEventListener('DOMContentLoaded',function(){
    var buttons = document.querySelectorAll('.button');
    var operator = document.querySelectorAll('.operator');
    var div = document.querySelectorAll('.display');
    var ans = document.querySelectorAll('.ans');
    var action = "";
    var flag = 0 ;
    var secondnum = "";
    var isnumcomplete = 0 ;
    var number1 = "";
    // operator dabane k baad
    for(let oper of operator)
    {       
            oper.addEventListener('click',function()
            {   
                if(flag == 1)
                {
                    let num1 = Number(number1);
                    let num2 = Number(secondnum);
                    div[0].textContent = operate(num1,num2,action);
                    number1 = div[0].textContent;
                    secondnum="";
                }
                 action = oper.textContent;
                //  isnumcomplete = 1;
                flag = 1;
            })

    }
    var dispvalue="";
    ans[0].addEventListener('click',function()
    {
        // var div = document.getElementsByClassName('display');
        // let numberone = div[0].textContent;
        let num1 = Number(number1);
        let num2 = Number(secondnum);
        div[0].textContent = operate(num1,num2,action);
    })
    for(let button of buttons)
    {
       button.addEventListener('click',function()
       {        
            if(flag==1 && isnumcomplete==1 )
            {    
                let num1 = Number(div[0].textContent);
                secondnum += button.textContent; 
                let num2 = Number(secondnum);
                // alert(operate(num1,num2,action));
                div[0].textContent=operate(num1,num2,action);
                flag = 0;
            }else if(flag == 1 && isnumcomplete != 1)
            {
                // second num
                // alert("yo");
                var div = document.getElementsByClassName('display');
                div[0].textContent = "";
                dispvalue = "";
        
                secondnum += button.textContent; 
                let displayValue = secondnum;
                append(displayValue);
                // alert(number1);


            }else{
                // only one num
                // alert("2");
                append(button.textContent);
                let div = document.getElementsByClassName('display');
                 number1 = div[0].textContent;
                //  alert("hey");
                
               
                      
            }
       })
    }
    function operate(num1 , num2 , a)
    {
     
        switch(a)
        {
            case "+":
                return num1+num2;
                break;
            case "-":
                return subtract(num1, num2);
                break;
            case "*":
                return multiply(num1,num2);
                break;
            case "/":
                return divide(num1,num2);
                break;
            default:
                console.log("default");

        }

    }
    function append(val)
    {
        var div = document.getElementsByClassName('display');
        let existingValue = div[0].textContent;
        
         div[0].textContent = existingValue+val;
          dispvalue = div[0].textContent;
    }
    var clear = document.getElementsByClassName('clear');
    clear[0].addEventListener('click',function(){
        var div = document.getElementsByClassName('display');
        div[0].textContent = "";
        dispvalue = "";
        number1 = "";
        secondnum="";
        flag= 0;
        isnumcomplete = "";

    })
   
});

