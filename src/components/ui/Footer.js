import Filter from "./Filter";

function Footer({ count, filter, change }) {
    return (
        <div className="todo-footer clearfix">
            <div className="float-start">
                <span className="count-todos">{count}</span>
                {' items left '}
            </div>
            <div className="float-end">
                <Filter filter={filter} change={change} />
            </div>
        </div>
     );
}

export default Footer;