import { useCallback, useState } from "react";
import { KEY_RETURN } from 'keycode-js' // npm install keycode-js --save

function InputBox({ addNewItem }) {
    const [value, setValue] = useState('');
    const handleKeyUpEvent = useCallback(
        e => {
            if (e.keyCode === KEY_RETURN) {
                addNewItem(e.target.value);
                setValue('');
            }
        },
        [addNewItem, setValue]
    );

    const handleChangeEvent = useCallback(
        e => {
            setValue(e.target.value);
        },
        [setValue]
    )

    return (
        <input 
            type="text" 
            className="form-control add-todo"
            value={value}
            onKeyUp={handleKeyUpEvent}
            onChange={handleChangeEvent}
            placeholder="Add new"

        />
        )
}

export default InputBox;