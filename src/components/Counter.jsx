import {useState} from "react";

const Counter = function () {
  let [likes, setLikes] = useState(0);

  return (
      <>
        <h1>{likes}</h1>
        <button onClick={() => setLikes(++likes)}>Increment</button>
        <button onClick={() => setLikes(--likes)}>Decrement</button>
      </>
  );
}

export default Counter;