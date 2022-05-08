import pezeshkan from '../asset/pezeshkan.svg'
import {FaBars} from 'react-icons/fa'

const MainHeader=()=>{
    return (
        <>
        <div style={{backgroundColor:'#e91e63',height:'120px',}}>

            <section style={{display:'inline-block',margin:'8px',}}>
            <img src={pezeshkan} width="70px" height="70px" alt="pezeshkan logo" />
            <span 
            style={{color:'white',display:'block',
           position:'relative',}}>pezeshkan </span>

            </section>
            <section style={{display:'inline-block',float:'right',margin:'10px'}}>

            <FaBars></FaBars>
            </section>

        </div>
        

        </>
    )
}
export default MainHeader