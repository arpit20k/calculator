const container = document.querySelector(".container");

const clear = document.querySelector(".AC");
const percent = document.querySelector(".percent");
const del = document.querySelector(".del");
const divide = document.querySelector(".division");
const n7 = document.querySelector(".n7");
const n8 = document.querySelector(".n8");
const n9 = document.querySelector(".n9");
const multiply = document.querySelector(".multiply");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const n6 = document.querySelector(".n6");
const n3 = document.querySelector(".n3");
const n2 = document.querySelector(".n2");
const n1 = document.querySelector(".n1");
const n0 = document.querySelector(".n0");
const n00 = document.querySelector(".n00");
const dot = document.querySelector(".dot");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const minus = document.querySelector(".minus");

const text = document.querySelector(".text");

let operation ="";

clear.addEventListener("click",()=>{
    operation="";
    text.textContent="";
});

n1.addEventListener("click",()=>{
    operation+="1";
    text.textContent = operation;
});

n2.addEventListener("click",()=>{
    operation+="2";
    text.textContent = operation;
});
n3.addEventListener("click",()=>{
    operation+="3";
    text.textContent = operation;
});
n4.addEventListener("click",()=>{
    operation+="4";
    text.textContent = operation;
});
n5.addEventListener("click",()=>{
    operation+="5";
    text.textContent = operation;
});
n6.addEventListener("click",()=>{
    operation+="6";
    text.textContent = operation;
});
n7.addEventListener("click",()=>{
    operation+="7";
    text.textContent = operation;
});
n8.addEventListener("click",()=>{
    operation+="8";
    text.textContent = operation;
});
n9.addEventListener("click",()=>{
    operation+="9";
    text.textContent = operation;
});
n0.addEventListener("click",()=>{
    operation+="0";
    text.textContent = operation;
});
n00.addEventListener("click",()=>{
    operation+="00";
    text.textContent = operation;
});
add.addEventListener("click",()=>{
    operation+="+";
    text.textContent = operation;
});
minus.addEventListener("click",()=>{
    operation+="-";
    text.textContent = operation;
});
multiply.addEventListener("click",()=>{
    operation+="*";
    text.textContent = operation;
});
divide.addEventListener("click",()=>{
    operation+="/";
    text.textContent = operation;
});
percent.addEventListener("click",()=>{
    operation+="%";
    text.textContent = operation;
});
del.addEventListener("click",()=>{
    operation=operation.slice(0,-1);
    text.textContent = operation;
});

equal.addEventListener("click",()=>
{
    operation=calculate(operation);
    text.textContent=operation;
});

function tokenize(op)
{
    let tokens = [];
    let number = "";

    for(let i=0;i<op.length;i++)
    {
        let ch = op[i];
        if("0123456789.".includes(op[i]))
        {
            number+=ch;
        }
        else{
            if(number!=="")
            {
                tokens.push(parseFloat(number));
                number="";
            }
          tokens.push(ch);  
        }
    }
        if(number!=="")
        {
            tokens.push(parseFloat(number));
        }
    
    return tokens;
}

function solveMulDiv(tokens) {
    let result = [tokens[0]];

    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let nextNumber = tokens[i + 1];

        if (operator === "*") {
            result[result.length - 1] *= nextNumber;
        } else if (operator === "/") {
            result[result.length - 1] /= nextNumber;
        } else {
            result.push(operator);
            result.push(nextNumber);
        }
    }

    return result;
}

function solveAddSub(tokens) {
    let result = tokens[0];

    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let num = tokens[i + 1];

        if (operator === "+") result += num;
        if (operator === "-") result -= num;
    }

    return result;
}
function calculate(operation) {
    if (operation === "") return "";
    let tokens = tokenize(operation);
    if (tokens.length < 1) return "";
    tokens = solveMulDiv(tokens);
    let result = solveAddSub(tokens);

    return result;
}
