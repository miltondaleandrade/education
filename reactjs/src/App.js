import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react";
import ItemAdd from "./ItemAdd";

function App() {
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

    const [newItem, setNewItem] = useState('')

    const setAndSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }

    const addItem = (item) => {
        console.log("Add: " + item);
        const id = items.length ? items[items.length - 1] : 1;
        const myNewItem = {id: id, checked: false, name: item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);
    }

    const handleClick = (id) => {
        const listItems = items.map(
            (item) =>
                item.id === id ? {...item, checked: !item.checked} : item
        );
        setAndSaveItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter(item => item.id !== id)
        setAndSaveItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }

    return (
        <div className="App">
            <Header title="Grocery List"/>
            <ItemAdd
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Content
                items={items}
                handleClick={handleClick}
                handleDelete={handleDelete}
            />
            <Footer length={items.length}/>
        </div>
    );
}

export default App;
