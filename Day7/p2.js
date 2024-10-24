function task (message,delay){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log(message);
        })
    })

};