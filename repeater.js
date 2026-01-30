let i = 1
function repeatAction (num,callback){
   for(  i; i<= num; i++){
       callback(i)
    }
}
function greet (){
    console.log(`Hello! ${i}`);
}
console.log(repeatAction(10,greet));
 