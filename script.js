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
    var dispvalue="";
    for(let button of buttons)
    {
       button.addEventListener('click',function()
       {        
        let displayValue = button.textContent;
        append(displayValue);

       })
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

    })
    var ans = document.getElementsByClassName('ans');;
    ans[0].addEventListener('click',function(){
         let eq =   dispvalue ;
        let idx = eq.search(/[\+\-\*\/]/);
        
        let operator  = eq.charAt(idx);
        let num1 = parseInt(eq.slice(0,idx));
        let num2 = parseInt(eq.slice(idx+1));
        if(operator=== "+")
        {
             var div = document.getElementsByClassName('display');
            div[0].textContent =   operate(num1,num2,add);
        }else if( operator === "-")
        {
            var div = document.getElementsByClassName('display');
            div[0].textContent =   operate(num1,num2,subtract);
        }else if(operator === "*")
        {
            var div = document.getElementsByClassName('display');
            div[0].textContent =   operate(num1,num2,multiply);

        }else{
            var div = document.getElementsByClassName('display');
            div[0].textContent =   operate(num1,num2,divide);
        }
        
    })
});

// 3 then when i click + 3+2 now extract it into num1 operation num2 

/**
 * Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
 */