import '../asset/post.css';
import  food1 from '../asset/food1.svg'
import {BiArrowBack} from 'react-icons/bi';
import hamber from '../asset/hamber.svg'
import chiness from '../asset/chiness.svg'
const Post=()=>{
    return (
        <>
        <div className="container wrapper">
                <h3 style={{padding:'10px'}}>جزییات سفارش</h3>
                <h4 style={{padding:'10px'}}>دوشنبه ۱۳ اردیبهشت ساعت ۱۳:۱۴</h4>
                <hr></hr>
            <ul style={{padding:'0'}}>
                <li>
                    <ul className="inner-list">
                        <li>
                            <img src={food1} alt="food1"/>
                            <span className="image-name">ممد علی برگر</span>
                        </li>
                        <li style={{marginRight:"80px"}}>
                            <BiArrowBack/>
                        </li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    <ul className="inner-list">
                        <li>
                            <img src={hamber} alt="hamber"/>
                            <span className="image-name">
                                (۱)
                              
                                همبرگر ممتاز </span>
                        </li>
                        <li>
                            <span>87,000تومان</span>
                        </li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    <ul className="inner-list">
                        <li>
                            <img src={chiness} alt="chiness"/>
                            <span className="image-name">(۱)
                                غذای چینی اژدها</span>
                        </li>
                        <li>
                        <span style={{marginRight:'-20px'}}>۳۲,000تومان</span>

                        </li>
                    </ul>
                </li>
                <hr></hr>

                <li>
                    <ul className="inner-list">
                        <li>
                            <img src={hamber} alt="hamber" />
                            <span className="image-name">(۱)
                                برگر ممتاز </span>
                        </li>
                        <li>
                        <span style={{marginRight:'30px'}}>۷۲,000تومان</span>

                        </li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    <ul className="inner-list">
                        <li>
                            <span><h3 >جمع کل</h3></span>
                        </li>
                        <li style={{marginRight:'120px'}}>
                            3122147641تومان
                        </li>
                    </ul>
                </li>
                






            </ul>
        </div>

        </>

    )
}
export default Post