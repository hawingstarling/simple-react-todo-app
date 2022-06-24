import InputBox from './InputBox'

function Header({ title, addNewItem }) {
    return (
        <header> 
            <h1>{title.toUpperCase()}</h1>
            <InputBox addNewItem={addNewItem} />
        </header>
     );
}

export default Header;