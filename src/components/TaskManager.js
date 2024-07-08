// src/components/TaskManager.js
import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

const TaskManager = () => {
    const { tasks, setTasks } = useContext(TaskContext);

    const handleDelete = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>TaskManager</h1>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.time}</td>
                            <td>{task.note}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskManager;
