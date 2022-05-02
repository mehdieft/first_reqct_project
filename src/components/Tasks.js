
import Task from './Task'
const Tasks = ({ tasks, onDelete, onChangeReminder }) => {

    return (
        <>
            <br></br><br></br>
            <div style={{ display: 'flex', flexDirection: 'row',
             maxWidth: '90%', flexWrap: 'wrap', justifyContent: 'space-between', alignItem: 'center' }}>
                {tasks.map((task) => ((<Task key={task.id} task={task} onDelete={onDelete} 
                onChangeReminder={onChangeReminder} />)))}
            </div>
        </>

    )
}
export default Tasks