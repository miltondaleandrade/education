const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Andrej'];
        return names[Math.floor(Math.random() * 3)]
    }
    return (
        <header>
            <main>
                <p>Hello {handleNameChange()}!</p>
            </main>
        </header>
    )
}

export default Content
