import PropTypes from 'prop-types';
// const onClick=()=>{
//     console.log("hello")
// }
const Button =({text,color,onClick})=>{
    return (
        <button style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    )
}
Button.prototypes={
    text:PropTypes.string.isRequired
}
Button.defaultProps={
    text:'click me !',
    color:'white'
}
export default Button