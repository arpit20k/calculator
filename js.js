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
    text.textContent+="1";
});