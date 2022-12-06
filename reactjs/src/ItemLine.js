import {FaTrashAlt} from "react-icons/fa";

const ItemLine = ({item, handleClick, handleDelete}) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleClick(item.id)}
            />
            <label
                onDoubleClick={() => handleClick(item.id)}
                style={item.checked ? {textDecoration: 'line-through'} : null}
            >{item.item}</label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
            />
        </li>
    )
}

export default ItemLine