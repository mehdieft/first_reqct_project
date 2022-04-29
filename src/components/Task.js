const Task=({text,day,reminder})=>{
    return (
        <>
        <div style={{display:'inline-block',width:'300px;',height:'400px;',margin:'auto',justifyContent:'space-between'}}>
        <h3>{text}</h3>
        <h6>{day}</h6>

        </div>
        </>
    )
}
export default Task