import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [index, setIndex] = useState(Math.floor(Math.random() * 100))

  const [meme, setMeme] = useState("")


  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
      .then((response) => {
        setMeme(response.data.data.memes[index]);
      });
  }, [index])


  const getNum = () => {
    setIndex(Math.floor(Math.random() * 100))
  }

  return (
    <div className="App">
      <h1>Get Random Memes and Templates</h1>
      <img src={meme.url} alt={<h1>Getting the meme</h1>} style={{ height: "60vh" }} />
      <h2>{meme.name}</h2>
      <button onClick={() => getNum()} style={{
        fontSize: "1.2rem",
        color: "#4a54f1",
        fontWeight: "bold",
        padding: 5
      }}>Get Memes</button>

    </div>
  );
}

export default App;
