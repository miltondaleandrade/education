import ItemLine from "./ItemLine";

const ItemList = ({items, handleClick, handleDelete}) => {
    return (
        <ul>
            {items.map((item) => (
                <ItemLine
                    key={item.id}
                    item={item}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList