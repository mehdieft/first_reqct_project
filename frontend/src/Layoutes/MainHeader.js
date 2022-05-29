import pezeshkan from '../asset/pezeshkan.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import '../asset/header.css'

const MainHeader = () => {
    return (
        <>
            <div style={{ backgroundColor: '#e91e63', height: '120px', }}>

                <section style={{float:'left'}}>
                    <img className="header-image-icon" src={pezeshkan} width="7rem" height="7rem" alt="pezeshkan logo" />
                    <span
                        style={{
                            color: 'white', display: 'block',
                            position: 'relative',
                            float:'left',
                            padding:'30px 0',
                        }}>pezeshkan </span>
                    <ul className="header-navigation">
                        <li className="first-list-item"><a href="#">home</a> </li> 
                        <li><a href="#">home</a> </li>
                        <li><a href="#">home</a> </li>

                    </ul>

                </section>
                <section style={{ display: 'inline-block', float: 'right', margin: '10px' }}>

                    <FaBars></FaBars>
                </section>

            </div>


        </>
    )
}
export default MainHeader