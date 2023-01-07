import './App.css'
import Square from "./Square.jsx";
import Input from "./Input.jsx";
import {useState} from "react";

function App() {

    const [colorValue, setColorValue] = useState('')

    return (
        <div className="App">
            <Square colorValue={colorValue}/>
            <Input colorValue={colorValue} setColorValue={setColorValue}/>
        </div>
    )
}

export default App
