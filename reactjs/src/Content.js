const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Andrej'];
        return names[Math.floor(Math.random() * 3)]
    }
    const onClick = (e) => {
        console.log(e.target)
    }
    return (
        <main>
            <main>
                <p onDoubleClick={ (e) => onClick(e)}>
                    Hello {handleNameChange()}!
                </p>
            </main>
        </main>
    )
}

export default Content
