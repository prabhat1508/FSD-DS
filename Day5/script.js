// function display(){
//     alert("hello");
// }
// display();


// let obj = {
//     'name' : "Aryan",
//     'id' : 12,
// }
// let ar=[12,3,4,5,6];
// let a;
// let b=21;
// console.log(typeof ar);


// function validate(){
//     let un=document.getElementById('in').value;
//     let pass =doc.getElementById('pass').value;
//     if(un=="admin" && pass == "admin"){
//         document.getElementById('res').innerHTML="Login Success";
//     }
//     else{
//         document.getElementById('res').innerHTML="Login Failed";
//     }
// }


//coversion
// let x=Number("12");
// let str=Number("123");
// let num=Boolean(12);
// console.log(x+str);
// console.log(0);


// let a=12;
// let b='12';
// console.log(a==b);
// console.log(a===b); 


let a=(x,y)=>{
    console.log(x+y);
    return (x+y);
}


let y=a(12,34);
console.log(y);


let say=()=>console.log("hello");
say();


function display(){
   let p1=document.querySelector('p');
   p1.innerHTML = "Result";
   p1.style.background="red";
}