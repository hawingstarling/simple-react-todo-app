import { useState } from "react";

function TodoItem({ data }) {
    const isCompleted = data.completed ? data.completed : false

    const [check, setCheck] = useState(isCompleted)

    const handleCheck = () => {
        setCheck(!isCompleted)
        data.completed = !isCompleted
    }

    return ( 
        <li key={data.id} className="list-group-item">
            <div className="form-check">
                <input type="checkbox" checked={check} onChange={handleCheck} className="form-check-input" value="" id={`todo-item-check-${data.id}`} />
                <label className="form-check-label" htmlFor={`todo-item-check-${data.id}`}>
                    {data.text}
                </label>
            </div>
        </li>
     );
}

export default TodoItem;