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

let justcalculated = false;
let dotused = false;
const text = document.querySelector(".text");

let operation ="";

clear.addEventListener("click",()=>{
    operation="";
    text.textContent="";
});

document.addEventListener("keydown",(e)=>{
    const key = e.key;
    if("0123456789".includes(key))
    {
        operation+=key;
    }
    else if(["."].includes(key) && dotused===false)
    {   
        operation+=key;
        dotused=true;
    }
    else if (["+","-","*","/"].includes(key)) {
        operation += key;
        dotused=false;
    }

    else if (key === "Enter") {
        operation = calculate(operation);
        justCalculated = true;
        dotused=false;
    }

    else if (key === "Backspace") {
        operation = operation.slice(0, -1);
    }

    else if (key === "Escape") {
        operation = "";
    }

    text.textContent = operation;
});
n1.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="1";
        justcalculated=false;
    }
    else operation+="1";
    text.textContent = operation;
});

n2.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="2";
        justcalculated=false;
    }
    else operation+="2";
    text.textContent = operation;
});
n3.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="3";
        justcalculated=false;
    }
    else operation+="3";
    text.textContent = operation;
});
n4.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="1";
        justcalculated=false;
    }
    else operation+="4";
    text.textContent = operation;
});
n5.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="1";
        justcalculated=false;
    }
    else operation+="5";
    text.textContent = operation;
});
n6.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="6";
        justcalculated=false;
    }
    else operation+="6";
    text.textContent = operation;
});
n7.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="7";
        justcalculated=false;
    }
    else operation+="7";
    text.textContent = operation;
});
n8.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="8";
        justcalculated=false;
    }
    else operation+="8";
    text.textContent = operation;
});
n9.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="9";
        justcalculated=false;
    }
    else operation+="9";
    text.textContent = operation;
});
n0.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="0";
        justcalculated=false;
    }
    else operation+="0";
    text.textContent = operation;
});
n00.addEventListener("click",()=>{
    if(justcalculated)
    {
        operation="1";
        justcalculated=false;
    }
    else operation+="00";
    text.textContent = operation;
});
add.addEventListener("click",()=>{
    operation+="+";
    text.textContent = operation;
    justcalculated=false;
        dotused=false;   

});
minus.addEventListener("click",()=>{
    operation+="-";
    text.textContent = operation;
    justcalculated=false;
        dotused=false;   

});
multiply.addEventListener("click",()=>{
    operation+="*";
    text.textContent = operation;
    justcalculated=false;
    dotused=false;   


});
divide.addEventListener("click",()=>{
    operation+="/";
    text.textContent = operation;
    justcalculated=false;
    dotused=false;   


});
percent.addEventListener("click",()=>{
    operation+="%";
    text.textContent = operation;
    justcalculated=false;
    dotused=false;   


});
del.addEventListener("click",()=>{
    operation=operation.slice(0,-1);
    text.textContent = operation;
    if(!operation.includes(".")) dotused=false;
    justcalculated=false;

});
dot.addEventListener("click",()=>{
    if(dotused) return;
    operation+=".";
    text.textContent=operation;
    dotused=true;
})
equal.addEventListener("click",()=>
{
    operation=calculate(operation);
    text.textContent=operation;
    justcalculated=true; 
    dotused=false;   
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
    let start =1;
    let result;
    result = [tokens[0]];
    if(tokens[0]==="-"){
        result = [tokens[1]*-1];
        start =2;
    }
    for (let i = start; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let nextNumber = tokens[i + 1];
        if((operator==="%"||operator==="/"||operator === "*")&&nextNumber=="-")
        {
            nextNumber = tokens[i+2]*(-1);
            if(operator==="%"){
        result[result.length-1]*=nextNumber/=100;
        }else if (operator === "*") {
            result[result.length - 1] *= nextNumber;
        } else if (operator === "/") {
            result[result.length - 1] /= nextNumber;
        } else {
            result.push(operator);
            result.push(nextNumber);
        }
        i++;
        }
        else{
        if(operator==="%"){
        result[result.length-1]*=nextNumber/=100;

        }else if (operator === "*") {
            result[result.length - 1] *= nextNumber;
        } else if (operator === "/") {
            result[result.length - 1] /= nextNumber;
        } else {
            result.push(operator);
            result.push(nextNumber);
        }
    }
    }

    return result;
}

function solveAddSub(tokens) {
    let start =1;
    let result;
    result = tokens[0];
    if(tokens[0]==="-"){
        result = tokens[1]*-1;
        start =2;
    }
    for (let i = start; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let num = tokens[i + 1];
        if((operator==="+"||operator==="-")&&num=="-")
        {
            num=tokens[i+2]*-1;
            if (operator === "+") result += num;
           if (operator === "-") result -= num;
           i++;
        }
        else{
            if (operator === "+") result += num;
           if (operator === "-") result -= num;
        }
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
