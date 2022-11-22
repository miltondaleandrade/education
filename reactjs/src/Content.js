import {useState} from "react";

const Content = () => {

    const [name, setName] = useState("Andrej");

    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Andrej'];
        setName(names[Math.floor(Math.random() * 3)])
    }

    return (
        <main>
            <main>
                <p onDoubleClick={handleNameChange}>
                    Hello {name}!
                </p>
            </main>
        </main>
    )
}

export default Content
