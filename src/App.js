import { useEffect, useState } from "react";
import "./App.css";
import DisplayCards from "./Components/DisplayCards";
import AddCard from "./Components/AddCard";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (title, body) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [data, ...prevPosts]);
      });
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      }
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Cards Maker</h1>
        <AddCard addPost={addPost} />
        <section className="mt-4 d-flex flex-column justify-content-center align-items-center">
          <h2>Cards</h2>
          <div className="d-flex row justify-content-center align-items-center">
            {posts.map((post) => (
              <DisplayCards
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                deletePost={deletePost}
                className="col-6 dcard"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
