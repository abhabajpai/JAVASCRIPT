//asynchronous javascript
//async code example
console.log(1);
console.log(2);
console.log(3);
//async code
setTimeout(()=>{
    console.log("print after 5 sec");
},5000)//after 5 sec
console.log(3);
console.log(4);
//making http request(example)
let request= new XMLHttpRequest();
console.log(request);
request.addEventListener('readystatechange',()=>{
    if(request.readystate==4)
       {
        console.log(request.responseText);
       }
})
//set up to request
request.open("Get","https://jsonplaceholder.typicode.com/todos")


//sending the request
request.send()