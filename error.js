
setTimeout(function(){
    try{
        throw Error()
    }catch(e){
        console.log(e);
    }

},3000);

setInterval(function(){
    console.log(1);
},1000)
//捕获异常
/*
process.on('uncaughtException',function(){
    console.log('error');
});*/
