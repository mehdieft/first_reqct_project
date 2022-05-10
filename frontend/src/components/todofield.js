import { useState } from 'react';
const TodoField = ({onsaveTodofield}) => {
    const [userInput, onUserInput] = useState({
        title: '',
        content: ''
    })
    // const [title, SetTitle] = useState('');
    // const [content, setContent] = useState('');
    const titleChange = (event) => {
        onUserInput({
            ...userInput,
            title: event.target.value
        })

        console.log("title change", event.target.value);
    }
    const ContentChange = (event) => {
        onUserInput({ ...userInput, content: event.target.value });
        console.log("content change==>", event.target.value);
    }



    const submitHandler=(event)=>{
        event.preventDefault();
        const creatdeData={
            title:userInput.title,
            content:userInput.content
        }
        // console.log("data form submit",creatdeData);
        onsaveTodofield(creatdeData)
        onUserInput({
            title:'',
            content:''
        })
    }
    return (
        <div className="d-flex flex-column w-80 mh-100 ">
            <h2>
                todo field type
            </h2>
            <form onSubmit={submitHandler}>

                <input type="text" value={userInput.title} className="mt-4 mb-4 form-control form-control-sm" onChange={titleChange} />
                <div className="input-group">
                    <div className="input-group-prepend">

                    </div>
                    <textarea value={userInput.content} className="form-control my-4" onChange={ContentChange} style={{ height: '60px', overflow: 'auto' }} aria-label="With textarea"></textarea>
                </div>

                <button className="btn btn-success" type="submit">
                    add todo

                </button>
            </form>

        </div>

    )
}
export default TodoField