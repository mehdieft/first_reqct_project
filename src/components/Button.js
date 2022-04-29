import PropTypes from 'prop-types';
const Button =({text,color})=>{
    return (
        <button style={{backgroundColor:color}} >{text}</button>
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