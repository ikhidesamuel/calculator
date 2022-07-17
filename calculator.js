// for numbers

const num = (num) => {
const display = document.querySelector("#display").value;
 if(display === "0"){
 document.querySelector("#display").value = num;
 } else {
 document.querySelector("#display").value += num;
    }}


// for sin cos tan

const sss = (ss) => {
let mode =  document.getElementById("mode").value
let nq = document.getElementById("display").value;
let ans = document.getElementById("ans").value;
try{nq = eval(nq);
let no = eval(`Math.${ss}(nq)`);
    if(nq === "0"){
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
   document.getElementById("display").value = "0"
   document.getElementById("ans").value = eval(`Math.${ss}(0)`);
         }else{
  let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
document.getElementById("ans").value = no;
    }
     if(ans){
let display = document.getElementById("display").value = ss + "("+ans +")";
document.getElementById("ans").value = eval(`Math.${ss}(ans)`);
    }
    
    
    if(mode == "DEG"){
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
      let display = document.getElementById("display").value = ss + "("+nq+")";
 
document.getElementById("ans").value = eval(`Math.${ss}(nq * Math.PI / 180)`)   
    }else{
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
      let display = document.getElementById("display").value = ss + "("+nq+")";
 
document.getElementById("ans").value = no
}}
catch(err){
    document.querySelector("#ans").value = "";
}}
    
    // sin, cos, tan inverse
    
    
   const sssh = (ss) => {
let mode =  document.getElementById("mode").value
let nq = document.getElementById("display").value;
let ans = document.getElementById("ans").value;
try{
nq = eval(nq);
let no = eval(`Math.a${ss}(nq)`);
    if(nq === "0"){
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
   document.getElementById("display").value = "0"
   document.getElementById("ans").value = eval(`Math.a${ss}(0)`);
         }else{
  let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
document.getElementById("ans").value = no;
    }
     if(ans){
     let up = '\u207B'+"\u00B9";
let display = document.getElementById("display").value = ss +up + "("+ans +")";
document.getElementById("ans").value = eval(`Math.a${ss}(ans)`);
    }
    
    
    if(mode == "DEG"){
    let up = '\u207B'+"\u00B9";
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
      let display = document.getElementById("display").value = ss +up+ "("+nq+")";
 
document.getElementById("ans").value = Math.floor(no * 57.296); 
    }else{
    let up = '\u207B'+"\u00B9";
    let x = document.getElementById("display").style;
      x.top = "0px"
      x.color= "#696969"
      let display = document.getElementById("display").value = ss + up + "("+nq+")";
 
document.getElementById("ans").value = no
}}
catch(err){
    document.querySelector("#ans").value = "";
    }
    } 
    
    
    
    
    
window.onload = function (){

const shift = document.querySelector("#shift");
const factorial = document.getElementById("!");



//mode button



const mode = document.getElementById("m").addEventListener("click", function (){
  let mx =  document.getElementById("mode").value;
  
if(mx == "DEG"){
 document.getElementById("mode").value = "RAD";
    
}else if(mx == "RAD"){
    document.getElementById("mode").value = "DEG";
}})



//shift button



shift.addEventListener("click", function (){

let up = '\u207B'+"\u00B9";
let ras = "\u00B2";
let supx = "\u2093";
let cbrt = "\u221B";

// sin
let sn = document.getElementById("shift").name;
if(sn === "shiftF"){
    document.getElementById("shift").name = "shiftS";
    document.getElementById("sin").setAttribute( "onClick", "sssh('sin')" );
    document.getElementById("sin").style.background = "olive";
    document.getElementById("sin").name = "sinh"
    document.getElementById("sin").textContent = "sin"+up;
   
    document.getElementById("√").style.background = "olive";
    document.getElementById("√").name = "sq"
    document.getElementById("√").textContent = "x"+ras;
    document.getElementById("tan").setAttribute( "onClick", "sssh('tan')" );
    document.getElementById("tan").style.background = "olive";
    document.getElementById("tan").name = "tanh"
    document.getElementById("tan").textContent = "tan"+up;
  
   document.getElementById("cos").setAttribute( "onClick", "sssh('cos')" );
    document.getElementById("cos").style.background = "olive";
    document.getElementById("cos").name = "cosh"
    document.getElementById("cos").textContent = "cos"+up;
    document.getElementById("log").style.background = "olive";
    document.getElementById("log").value = "10^";
    document.getElementById("log").textContent = "10x"
    
    document.getElementById("e").style.background = "olive";
    document.getElementById("e").textContent = cbrt;
    document.getElementById("e").name = "cbrt"
 }
 
 if(sn === "shiftS"){
    document.getElementById("shift").name = "shiftF";
    document.getElementById("sin").setAttribute( "onClick", "sss('sin')" );
    document.getElementById("sin").style.background = "#222222";
    document.getElementById("sin").name = "sin"
    document.getElementById("sin").textContent  = "sin";
  
 
    document.getElementById("√").style.background = "#222222";
    document.getElementById("√").name = "√"
    document.getElementById("√").textContent  = "√";
   
   
   
   document.getElementById("tan").setAttribute( "onClick", "sss('tan')" );
    document.getElementById("tan").style.background = "#222222";
    document.getElementById("tan").name = "tan"
    document.getElementById("tan").textContent  = "tan";
   
   
   
   document.getElementById("cos").setAttribute( "onClick", "sss('cos')" );
    document.getElementById("cos").style.background = "#222222";
    document.getElementById("cos").name = "cos"
    document.getElementById("cos").textContent  = "cos";
  
    document.getElementById("log").style.background = "#222222";
    document.getElementById("log").value = "log";
    document.getElementById("log").textContent  = "log"
    
    
    document.getElementById("e").style.background = "#222222";
    document.getElementById("e").textContent  = "e";
    document.getElementById("e").name = "e"
 }   
   
  
})


// factorial button


factorial.addEventListener("click",function factorialize(num) {
let ans = document.querySelector("#ans").value;
let x = document.querySelector("#display").style;
let dis = document.querySelector("#display").value;
num = document.querySelector("#display").value;
try{num = eval(num);
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  
  if(ans){
   num = document.querySelector("#ans").value;
  num = eval(num);
    var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  document.querySelector("#display").value = ans + "!";
  document.querySelector("#ans").value = result
 }else{
 
  x.color = "#696969";
  x.top = "0px"
  document.querySelector("#display").value = dis+"!";
 document.querySelector("#ans").value = result;
 
 }
}catch(err){
    document.querySelector("#ans").value = "";
    }
    }
)


// this is for the OFF button



let OFF = document.getElementById("off").addEventListener("click", function(){
let mx = document.querySelector("#mode").style.visibility = "hidden";
     let x = document.getElementById("calc")[1].style.visibility="hidden";
     let ans = document.getElementById("ans");
     ans.style.color="#e3fbe3";
 })

// this is for the CE button

 let ce = document.getElementById("ce").addEventListener("click", function(){
 
     let mx =  document.getElementById("mode").style.visibility = "visible";
     let x = document.getElementById("calc")[1].style;
       x.visibility="visible";
      x.top = "9px"
      x.color= "black"
     let ans = document.getElementById("ans");
     ans.style.color="black";
 document.getElementById("display").value = "0";
 document.getElementById("ans").value = "";
 document.getElementById("shift").name = "shiftF";
 // sin
    document.getElementById("sin").style.background = "#222222";
    document.getElementById("sin").textContent  = "sin";
    document.getElementById("sin").setAttribute( "onClick", "sss('sin')" );
    
    //tan
    
    document.getElementById("tan").style.background = "#222222";
    document.getElementById("tan").textContent  = "tan";
    document.getElementById("tan").setAttribute( "onClick", "sss('tan')" );
    //cos
    
    document.getElementById("cos").style.background = "#222222";
    document.getElementById("cos").textContent  = "cos";
    document.getElementById("cos").setAttribute( "onClick", "sss('cos')" );
    
    // log
    
    document.getElementById("log").style.background = "#222222";
    document.getElementById("log").textContent  = "log";
    document.getElementById("log").name = "log"
    
    //in
    
    document.getElementById("in").style.background = "#222222";
    document.getElementById("in").textContent  = "In";
    
    // √
    
    document.getElementById("√").style.background = "#222222";
    document.getElementById("√").textContent  = "√";
    document.getElementById("√").name = "√"
    
    
    document.getElementById("e").style.background = "#222222";
    document.getElementById("e").textContent  = "e";
    document.getElementById("e").name = "e"

 
 })  
  
  // this is for ^ button
  
let rasPow = document.querySelector("#rasPow").addEventListener("click", function(){
let display = document.querySelector("#display").value;
let ans = document.querySelector("#ans").value;
let dis = document.querySelector("#display").value += "**";
if(display.charAt(display.length -1) == "+" || display.charAt(display.length -1) == "-" || display.charAt(display.length -1) == "*" || display.charAt(display.length -1) == "/"){
document.querySelector("#display").value = display;
}

if(ans){
    document.querySelector("#display").value = ans + "**"
}
})
 
 // this is for the "." button
 
    
    let point = document.getElementById(".").addEventListener("click", function(){
        var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value = "."
    }else{
        document.getElementById("calc")[1].value += "."
    }
    
    let plus = display.substring(display.indexOf("+") + 1);
 let div = display.substring(display.indexOf("/") + 1);
 let times = display.substring(display.indexOf("*") + 1);
 let minus = display.substring(display.indexOf("-") + 1);
    
    
    if(display.charAt(display.length-2) === "." && plus.charAt(plus.length-2) === "."){ 
 document.getElementById("calc")[1].value = display;
 }
 
 
 if(plus.indexOf(".") != -1 && plus.indexOf("+")){ 
 document.getElementById("calc")[1].value = display;
 }else{ 
 document.getElementById("calc")[1].value + ".";
 }
 

 
    if(display.charAt(display.length-1) === "." || plus.charAt(plus.length-1) === "."){
        document.getElementById("calc")[1].value = display;
    }})
    
    
    
    // this is for the In button
    
    let IN = document.getElementById("in").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
    var display = document.getElementById("calc")[1].value;
    let nw =  document.getElementById("calc")[1].value;
 try{
 let np = Math.log(eval(nw));
    if(display === "0"){
        document.getElementById("calc")[1].value = 0;
    }
   else if(isNaN(np)){
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
       document.getElementById("ans").value = "Syntax error"
   }else{
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
      document.getElementById("calc")[1].value = "In(" + display + ")";
   document.getElementById("ans").value = np;
    }
     
    if(ans){
    let display = document.getElementById("calc")[1].value = "In(" + ans+")"
        document.getElementById("ans").value = Math.log(ans); 
    }}catch(err){
    document.querySelector("#ans").value = "";
    }
    })
    
 
 
 // this is for the division(/) button
 
    
    let divide = document.getElementById("/").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
    var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value += "/"
    }else{
        document.getElementById("calc")[1].value += "/"
    }
    
     if(display.charAt(display.length-2) === "*"){ 
 display =display.slice(0, -1);
 }
    
    
    if(display.charAt(display.length-1) === "*" || display.charAt(display.length-1) === "-" || display.charAt(display.length-1) === "+"){ 
 display =display.substring(0, display.length-1) + "/"
 }
    if(display.charAt(display.length-2) === "/" && isNaN(display.charAt(display.length -1))){ 
 display =display.slice(0, -1);
 }
   
    
    if(ans){
        document.getElementById("calc")[1].value = ans += "/"
    }
    
    if(display.charAt(display.length-1) === "/"){
        document.getElementById("calc")[1].value = display;
    }})
    
    
    
    // multiply button
    
    
    let multiply = document.getElementById("x").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
        var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value += "*"
    }else{
        document.getElementById("calc")[1].value += "*"
    }
    
    
    
    if(display.charAt(display.length-2) === "/" && display.charAt(display.length-1) === "-"){ 
 display =display.slice(0, -1);
 }
 
 
 if(display.charAt(display.length-2) === "/" && display.charAt(display.length-1) === "+"){ 
 display =display.slice(0, -1);
 }
    
    
    if(display.charAt(display.length-1) === "/" || display.charAt(display.length-1) === "-" || display.charAt(display.length-1) === "+"){ 
 display =display.substring(0, display.length-1) + "*"
 }
    
    
    if(display.charAt(display.length-2) === "*" && isNaN(display.charAt(display.length -1))){ 
 display =display.slice(0, -1);
 }
    
    if(display.charAt(display.length-1) === "*"){
        document.getElementById("calc")[1].value = display;
    }
    
    if(ans){
        document.getElementById("calc")[1].value = ans += "*"
    }
    
    })


  // this is for the Minus(-) button


    
    let minus = document.getElementById("-").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
        var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value = "-"
    }else{
        document.getElementById("calc")[1].value += "-"
    }
    
    if(ans){
        document.getElementById("calc")[1].value = ans += "-"
    }
    
    if(display === "-"){
        document.getElementById("calc")[1].value = "-"
    }
    
    if(display.charAt(display.length-1) === "+"){ 
 display =display.substring(0, display.length-1) + "-"
 }
    
    
    if(display.charAt(display.length-1) === "-"){
        document.getElementById("calc")[1].value = display;
    }})
    
    
    // add button
    
    
    let add = document.getElementById("+").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
        var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value = "0"
    }else{
        document.getElementById("calc")[1].value += "+"
    }
    
    if(ans){
        document.getElementById("calc")[1].value = ans += "+"
    }
    
    
    if(display.charAt(display.length-1) === "-"){ 
 display =display.substring(0, display.length-1) + "+"
 }
    
    if(display.charAt(display.length-1) === "+"){
        document.getElementById("calc")[1].value = display;
    }})
  
  
 // this is for the percentage(%) button 
  
    
    let percentage = document.getElementById("%").addEventListener("click", function(){
    
let nq = document.getElementById("calc")[1].value;
try{let no = eval(nq)/ 100
let ans = document.getElementById("ans").value;
    if(nq === "0"){
        document.getElementById("calc")[1].value = "0"
    }else{
    let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
document.getElementById("calc")[1].value = nq + "%";
document.getElementById("ans").value = no;
    }
    
    if(ans){
    let display = document.getElementById("calc")[1].value = ans + "%";
        document.getElementById("ans").value = ans/100
    } 
    
   }catch(err){
    document.querySelector("#ans").value = "";
    }
    })
 
 // this is for the square root(√) button
    
    let sqrt = document.getElementById("√").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
    var display = document.getElementById("calc")[1].value;
    let nw =  document.getElementById("calc")[1].value;
 try{
 let np = Math.sqrt(eval(nw));
    if(display === "0"){
        document.getElementById("calc")[1].value = "0"
    }
   else if(isNaN(np)){
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
       document.getElementById("ans").value = "Syntax error"
   }else{
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
     document.getElementById("calc")[1].value = "√" + display;
   document.getElementById("ans").value = np;
    }
    
    if(ans){
    let display = document.getElementById("calc")[1].value = "√" + ans
        document.getElementById("ans").value = Math.sqrt(ans); 
    }
    
  let sq = document.getElementById("√").name;
  if(sq === "sq"){
  let ras = "\u00B2";
  document.getElementById("calc")[1].value = "("+display + ")" + ras;
      document.getElementById("ans").value = eval(display) * eval(display);
      document.getElementById("√").name = "√"
  }
  
  if(ans && sq === "sq"){
    let ras = "\u00B2";
    let display = document.getElementById("calc")[1].value = ans + ras
        document.getElementById("ans").value = ans * ans; 
      document.getElementById("√").name = "√"
    }
    
    }catch(err){
    document.querySelector("#ans").value = "";
    }
    })
 
  // this is for the backspace button
    
    let del = document.getElementById("del").addEventListener("click", function delete_num () { 
    var display = document.getElementById("calc")[1].value;
    if(display === "0" || display === ""){
        var display = document.getElementById("calc")[1].value = "0"}else{
    
    var field = document.getElementById('display'); field.value = field.value.slice(0, -1); }})
    
    // this is for the log button
    
    let log = document.getElementById("log").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
    var display = document.getElementById("calc")[1].value;
    let nw =  document.getElementById("calc")[1].value;
 try{
  let np = Math.log(eval(nw))/Math.LN10;
    if(display === "0"){
        document.getElementById("calc")[1].value = 0;
    }
   else if(isNaN(np)){
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
       document.getElementById("ans").value = "Syntax error"
   }else{
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
      document.getElementById("calc")[1].value = "log(" + display + ")";
   document.getElementById("ans").value = np;
    }
     
    if(ans){
    let display = document.getElementById("calc")[1].value = "log(" + ans+")"
        document.getElementById("ans").value = Math.log(ans)/Math.LN10; 
    }}catch(err){
    document.querySelector("#ans").value = "";
    }
    }) 
    
    // this is for the pie button
    
    let pie = document.getElementById("π").addEventListener("click", function(){
        var display = document.getElementById("calc")[1].value;
    if(display === "0"){
        document.getElementById("calc")[1].value = "3.14159"
    }else{
    let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
        document.getElementById("calc")[1].value = display +"π";
        document.getElementById("ans").value = display * 3.14159;
    }}) 
    
    // this is for the e button
    
    let e = document.getElementById("e").addEventListener("click", function(){
    let ans = document.getElementById("ans").value;
    var display = document.getElementById("calc")[1].value;
    let nw =  document.getElementById("calc")[1].value;
 try{ let np = Math.exp(eval(nw));
    if(display === "0"){
        document.getElementById("calc")[1].value = "0"
    }
   else if(isNaN(np)){
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
       document.getElementById("ans").value = "Syntax error"
   }else{
   let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
      let display = document.getElementById("calc")[1].value = nw + "e"
   document.getElementById("ans").value = np;
    }
    
    if(ans){
    let display = document.getElementById("calc")[1].value = ans + "e"
        document.getElementById("ans").value = Math.exp(ans); 
    }
    let cbrt = "\u221B";
    let sg = document.getElementById("e").name;
    if(sg === "cbrt"){
 document.getElementById("calc")[1].value = cbrt + display;
        document.getElementById("ans").value = Math.cbrt(eval(display));
        }
        
        if(ans && sg === "cbrt"){
    let cbrt = "\u221B";
    let display = document.getElementById("calc")[1].value = cbrt + ans;
        document.getElementById("ans").value = Math.cbrt(ans); 
      
    }
    }catch(err){
    document.querySelector("#ans").value = "";
    }
    })
  
  // this is for the equals to button
    
let equals = document.getElementById("=").addEventListener("click", function(){
    
let dis = document.getElementById("calc")[1].value;
let ans = document.getElementById("ans").value;
try{if(ans && dis === ""){
  let x = document.getElementById("calc")[1].style;
   x.color = "black";
   x.top  = "11px";
   document.getElementById("calc")[1].value = ans;
   document.getElementById("ans").value = "";
    
    }else if(dis === "0"){
        document.getElementById("calc")[1].value = "0"
    }else if(isNaN(dis.charAt(dis.length-1))){
        document.querySelector("#display").value = dis;
    
    }else{
 let x = document.getElementById("calc")[1].style;
      x.top = "0px"
      x.color= "#696969"
     document.getElementById("ans").value = eval(dis);
     
    }}
    catch(err){
        document.querySelector("#ans").value = err.name;
    }
   })
}
