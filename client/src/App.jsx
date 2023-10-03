import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default App;
