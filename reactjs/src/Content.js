const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Andrej'];
        return names[Math.floor(Math.random() * 3)]
    }
    return (
        <main>
            <main>
                <p>Hello {handleNameChange()}!</p>
            </main>
        </main>
    )
}

export default Content
