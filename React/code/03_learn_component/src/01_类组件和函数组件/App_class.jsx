function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

function Child({ onClick }) {
  useEffect(() => {
    console.log("Child component rendered");
  });

  return <button onClick={onClick}>Log Count</button>;
}
export default App;
