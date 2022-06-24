
const options = {
    all: 'All',
    active: 'Active',
    completed: 'Completed'
};

console.log('object.key: ', Object.keys(options));

function Filter({ filter, change }) {
    const getClass = key => (key === filter ? 'selected' : '')

    return ( 
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a href="#" onClick={() => change(key)} className={getClass(key)} >
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Filter;