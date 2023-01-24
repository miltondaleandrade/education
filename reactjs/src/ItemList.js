import ItemLine from "./ItemLine";

const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        <ul>
            {items.map((item) => (
                <ItemLine
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList