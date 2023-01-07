import './App.css'
import Square from "./Square.jsx";
import Input from "./Input.jsx";
import {useState} from "react";
import {SketchPicker} from "react-color";

function App() {

    const [colorValue, setColorValue] = useState('#000')

    const onPickerComplete = (color) => {
        console.log(color)
        setColorValue(color.hex)
    }

    return (
        <div className="App">
            <Square colorValue={colorValue}/>
            <Input colorValue={colorValue} setColorValue={setColorValue}/>
            <SketchPicker
                color={ colorValue }
                onChangeComplete={ onPickerComplete }
            />
        </div>
    )
}

export default App
