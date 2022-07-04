

console.log('before')
console.log('after');
getUser(321,function(User){
    console.log('user',User);
    getUserRepo(User,(data)=>{ console.log('data',data)})
})
function  getUser(id,callback){
    setTimeout(()=>{
        console.log("gettin data",id);
        callback({id:1,name:'mehdi',family:'saedi'});
    },3000)
}
function getUserRepo(username,callback){
    setTimeout(()=>{
        console.log('get user repos from github')
        callback(['repo1','repo2','repo3'])
    },3000)

}
