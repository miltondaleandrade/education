import logo from './logo.svg';
import './App.css';

function App() {
    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Andrej'];
        return names[Math.floor(Math.random() * 3)]
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello {handleNameChange()}!
                </p>
            </header>
        </div>
    );
}

export default App;
