import { useState } from "react";
import { Button, TextField } from "@mui/material";

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()){
            addTask(title);
            setTitle('');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <TextField
                className="text"
                size="small"
                label="add a new task here"
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                inputProps={{ maxLength: 30 }}
            />
            <Button
                variant="contained"
                className="button1"
                type="submit"
            >Add
            </Button>
        </form>
    )
}

export default TaskForm