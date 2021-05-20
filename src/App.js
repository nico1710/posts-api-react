import "./styles.css";
import Note from "./Note";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Nuevo Usuario</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="NUEVO USUARIO"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <button type="submit">Nuevo Usuario</button>
      </form>
      <ol>
        {posts.map((post) => (
          <Note key={post.id} {...post} />
        ))}
      </ol>
    </div>
  );
}
