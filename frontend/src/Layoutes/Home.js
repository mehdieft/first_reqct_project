import TodoField from '../components/todofield'
import Todo from '../components/Todo';

const Home=()=>{
    return (
        <>
       
       
            <div style={{display:'inline-block'}}>
                <TodoField />

            </div>
            <div style={{display:'inline-block', maxWidth:'30%'}}>
                <Todo></Todo>

            </div>

       
        </>
    )
}
export default Home