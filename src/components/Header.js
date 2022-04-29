import PropTypes from 'prop-types';
import Button from './Button';
const onClick=()=>{
    console.log("im parent component");
}


const Header = ({title}) => {
  return (
    <header>
        <h1 style={headerStyle}>task  {title} </h1>
        <br></br>
        <Button text='click mehdi' onClick={onClick} color='yellow'  />

    </header>
  )
}

Header.defaultProps = {
    title:'mehdi saedi'
}
Header.propTypes={
    title:PropTypes.string,
}
const headerStyle={
    backgroundColor:'green'
}

export default Header