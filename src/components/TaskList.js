import Tasks from "./Tasks";

const TaskList = ({tasks, markCompleted, removeTask}) => {
    return(
        <ul>
            {tasks.map((task) => (
                <Tasks 
                    key={task.id}
                    task={task}
                    markCompleted={markCompleted}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    )
}

export default TaskList;