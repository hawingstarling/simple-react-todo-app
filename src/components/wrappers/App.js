import { useCallback, useState } from 'react';
import TodoList from './../ui/TodoList';
import { ITEMS_INITIAL_STATE, FILTER_DEFAULT } from './../../constants/index'

function App() {
    // items variable: this is items array contain item
    const [items, setItems] = useState(ITEMS_INITIAL_STATE)

    // filter variable: this is filter items (all, active, completed)
    const [filter, setFilter] = useState(FILTER_DEFAULT)

    // header title
    const title = 'Things to do';

    // function add new item
    const addNewItem = useCallback(
        text => {
            setItems(items => {
                const nextId = items.length + 1;
                const newItem = {
                    id: nextId,
                    text: text
                };
                return [...items, newItem];
            })
    }, [setItems])

    const changeFilter = useCallback(value => setFilter(value), [setFilter])

    return (
        <div className="container">
            <TodoList 
                title={title} 
                items={items}
                addNewItem={addNewItem}
                filter={filter}
                change={changeFilter}
            />
        </div>
    );
}

export default App;
