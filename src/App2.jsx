import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [text, setText] = useState("");
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const addItem = () => {
    if (text !== "")
      dispatch({ type: "addItem", payload: text });
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Ajouter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => dispatch({ type: "DELETE_ITEM", payload: index })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
