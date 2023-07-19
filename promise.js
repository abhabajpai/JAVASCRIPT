let getabha=()=>{
    return new Promise((resolve,reject)=>{
        resolve("some data");
    })
}
getabha().then((data)=>{
    console.log(data);
    console.log("abha bajpai");
}).catch((error)=>{
    console.log(error);

})