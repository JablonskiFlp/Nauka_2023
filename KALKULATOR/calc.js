let first_number = document.getElementById("my_calc__working_space__current_number").innerHTML;
let second_number = "";
var buttons = document.getElementsByTagName('button');
var buttonsArray = Array.from(buttons);

buttonsArray.forEach(button => {
    button.addEventListener('click',function() {
        my_switch(button);
    });
});

function my_switch(button)
{   
    const my_operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    let operators = ['+', '-', 'x', '/'];
    if( Number(button.innerHTML) < 10 && Number(button.innerHTML) >= 0 || button.innerHTML==',')
    {
        first_number=="0" ? first_number="":null;
        button.innerHTML == ','?first_number+='.':first_number+=button.innerHTML;
    }
    else if (operators.includes(button.innerHTML)) {
        if(first_number==="0")
        {
            second_number+=button.innerHTML;
        }
        else
        {
            first_number+=button.innerHTML;
            second_number=first_number;
            first_number="0";
        }
    }
    else if (button.innerHTML == '=') {
        let lastOperator = second_number[second_number.length - 1];
        if(!operators.includes(lastOperator))
        {
            null;
        }
        else
        {
        second_number = my_operators[lastOperator](Number(second_number.substring(0, second_number.length - 1)), Number(first_number));
        first_number = "0";
        }
    }
    else if (button.innerHTML == 'C') 
    {
        second_number="";
        first_number="0";
    }
    else
    {
        if(first_number.length>0)
        {
            first_number = first_number.substring(0, first_number.length - 1)
        }
    }
    document.getElementById("my_calc__working_space__saved_number").innerHTML = second_number;
    document.getElementById("my_calc__working_space__current_number").innerHTML = first_number;
}