import {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            name: "Item 1"
        },
        {
            id: 2,
            checked: false,
            name: "Item 2"
        },
        {
            id: 3,
            checked: false,
            name: "Item 3"
        }
    ]);

    const handleClick = (id) => {
        const listItems = items.map(
            (item) =>
                item.id === id ? {...item, checked: !item.checked} : item
        );
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter(item => item.id !== id)
        setItems(listItems);
    }

    return (
        <main>
            <main>
                {items.length ? (
                    <ul>
                        {items.map((item) => (
                            <li className="item" key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleClick(item.id)}
                                />
                                <label
                                    onDoubleClick={() => handleClick(item.id)}
                                    style={item.checked ? {textDecoration: 'line-through'} : null}
                                >{item.name}</label>
                                <FaTrashAlt
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => handleDelete(item.id)}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{marginTop: '2rem'}}>Your list is empty</p>
                )}
            </main>
        </main>
    )
}

export default Content
