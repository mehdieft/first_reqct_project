import '../asset/errorDialog.css';
import {MdCancel} from 'react-icons/md'
const ErrorDialog=({title,content})=>{
    return (
        <>
        <div className="error-wrapper">
            <div className="row h-80">
            <h1 className="col-8 col-md-9 col-sm-8 text-center mx-auto">{title}</h1>
            <MdCancel   className="col-1 col-sm-1 col-md-1 m-0" />
            </div>
            <hr></hr>
            <div>
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}
ErrorDialog.defaultProps = {
    title:'error',
    content:'something wrong happenned please check '
}
export default ErrorDialog