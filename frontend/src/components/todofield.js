import { useState } from 'react';
const TodoField = () => {
    const [userInput,onUserInput]=useState({
        title:'',
        content:''
    })
    // const [title, SetTitle] = useState('');
    // const [content, setContent] = useState('');
    const titleChange = (event) => { 
        onUserInput({...userInput,
        title:event.target.value
        })

    console.log("title change",event.target.value);
    }
    const ContentChange = (event) => { onUserInput({...userInput,content:event.target.value});
    console.log("content change==>",event.target.value);
    }
    return (
        <div className="d-flex flex-column w-80 mh-100 ">
            <h2>
                todo field type
            </h2>
            <input type="text" className="mt-4 mb-4 form-control form-control-sm" onChange={titleChange} />
            <div className="input-group">
                <div className="input-group-prepend">

                </div>
                <textarea class="form-control my-4" onChange={ContentChange} style={{ height: '60px', overflow: 'auto' }} aria-label="With textarea"></textarea>
            </div>

            <button className="btn btn-success" type="submit">
                add todo

            </button>

        </div>

    )
}
export default TodoField