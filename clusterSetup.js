const express = require("express");
const os=require('os');
const cluster=require('cluster');


const cpuNums=os.cpus().length;
if(cluster.isPrimary)
{
    for (let i = 0; i < cpuNums; i++) {
       cluster.fork();
    }
    cluster.on("exit",()=>{
        cluster.fork();
    })
}

else{
    
    const app=express();
    app.listen(5000, () => {
        console.log("Server is running  !!!!");
      });

}
