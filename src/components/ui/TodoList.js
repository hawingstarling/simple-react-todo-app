import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { applyFilter } from './../../services/filter'

function TodoList({ title, items, addNewItem, filter, change }) {
    const count = items.length  // identify length of items
    const filteredList = applyFilter(items, filter)
    console.log('filter list: ', filteredList);
    return ( 
        <div className="todolist">
            <Header title={title} addNewItem={addNewItem} />
            <ul className="list-group list-group-flush">
                {filteredList.length === 0 ? (
                    <div className="alert alert-secondary">No items in the list.</div>
                ) : (
                    filteredList.map(item => <TodoItem key={item.id} data={item} />)
                )}
            </ul>
            <Footer {...{ count, filter, change }} />
        </div>
    );
}

export default TodoList