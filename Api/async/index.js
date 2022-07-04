console.log("before");
const user=getUser(2);
 console.log("get user---->",user);
setTimeout(()=>{
    console.log("async");
},2000)
console.log("after");
function getUser(id){
    setTimeout(()=>{
        console.log("async")
        return id
    },2000)
}