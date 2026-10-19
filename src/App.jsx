import { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  
  const searchInputRef = useRef(null);
  
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
 
  return (
    <>
      <input ref={searchInputRef} type="text" placeholder="Search users..." />

      <button onClick={() => searchInputRef.current?.focus()}>
        Focus Search
      </button>

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
