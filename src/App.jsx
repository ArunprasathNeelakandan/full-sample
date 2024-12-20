import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  const getMeg = async() => {
    const response = await fetch("http://localhost:5000/api")
    const data = await response.json()
    setMessage(data.message)
    console.log(data)
  }

  useEffect(() => {
    getMeg()
  }, []);

  return (
    <div>
      <h1>Full-Stack App</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}

export default App;
