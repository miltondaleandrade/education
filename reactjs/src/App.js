import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react";
import ItemAdd from "./ItemAdd";
import ItemSearch from "./ItemSearch";

function App() {

    const storageName = 'shoppinglist';

    const [items, setItems] = useState(JSON.parse(localStorage.getItem(storageName)));

    const [newItem, setNewItem] = useState('')

    const [search, setSearch] = useState('')

    const setAndSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem(storageName, JSON.stringify(newItems));
    }

    const addItem = (item) => {
        console.log("Add: " + item);
        const id = items.length ? items[items.length - 1] : 1;
        const myNewItem = {id: id, checked: false, item: item};
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
            <ItemSearch
                search={search}
                setSearch={setSearch}
            />
            <Content
                items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                handleClick={handleClick}
                handleDelete={handleDelete}
            />
            <Footer length={items.length}/>
        </div>
    );
}

export default App;
