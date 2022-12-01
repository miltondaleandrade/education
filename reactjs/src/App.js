import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react";

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
        <div className="App">
            <Header title="Grocery List"/>
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
