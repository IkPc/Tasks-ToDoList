import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = ({task, markCompleted, removeTask}) => {
    return(
        <li>
            <input
                type="checkbox"
                checked={task.concluida}
                onChange={() => markCompleted(task.id)}
            />
            <span style={{ textDecoration: task.markCompleted ? 'line-through' : 'none', alignItems: 'flex-start'}}>
                {task.title}
            </span>
            <Button
                className="button2"
                type="submit"
                variant="outlined"
                onClick={() => removeTask(task.id)}
                startIcon={<DeleteIcon />}
                >Delete
            </Button>
        </li>
    )
}

export default Tasks;