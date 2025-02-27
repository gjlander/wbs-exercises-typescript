// You can work here or download the template
// Your components go here

const App = () => {
    const handleClick = () => {
        alert("You've been alerted!");
    };
    return (
        <div>
            <button onClick={handleClick}>Alert me!</button>
            <input type='text' onChange={(e) => console.log(e.target.value)} />
        </div>
    );
};

export default App;
