const number=1000
const p=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(number %2==0)resolve(number)
        else reject(new Error('number is not oddd'))
    },1000)
});
p
.then(res=>console.log('res',res))
.catch(err)
