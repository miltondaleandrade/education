import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from "react";
import ItemAdd from "./ItemAdd";
import ItemSearch from "./ItemSearch";
import apiRequest from "./apiRequest";

function App() {

    const API_URL = 'http://localhost:3500/items';

    const [items, setItems] = useState([]);

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');

    const [fetchError, setFetchError] = useState(null);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('useEffect is called.');
        const fetchItems = async () => {
            console.log("Fetch items ...");
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw Error('Did not receive an expected data.')
                }
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        setTimeout(() => {
            fetchItems();
        }, 1000);
    }, [])

    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {id, checked: false, item};
        const listItems = [...items, myNewItem];
        setItems(listItems);
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myNewItem)
        }
        const result = await apiRequest(API_URL, postOptions);
        if (result) {
            setFetchError(result)
        }
    }

    const handleCheck = async (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);
        const myItem = listItems.filter(item => item.id === id)[0];
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({checked: myItem.checked})
        }
        const result = await apiRequest(`${API_URL}/${id}`, updateOptions);
        if (result) {
            setFetchError(result)
        }
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
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
            <main>
                {isLoading && <p>Loading Items ...</p>}
                {fetchError && <p style={{color: 'crimson'}}>{`Error: ${fetchError}`}</p>}
                {!isLoading && !fetchError && <Content
                    items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />}
            </main>
            <Footer length={items.length}/>
        </div>
    );
}

export default App;
