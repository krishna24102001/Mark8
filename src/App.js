import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "💣": "Bomb",
  "🧸": "Teddy Bear",
  "🔪": "Kitchen Knife",
  "⏰": "Alarm Clock",
  "🧨": "Firecracker"
};
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [output, setoutput] = useState("");

  function inputChangeHandler(event) {
    var result = emojiDictionary[event.target.value];
    if (event.target.value === "") {
      return setoutput("Please enter something");
    }
    if (result === undefined) {
      setoutput("Not in our dictionary");
    } else {
      setoutput(result);
    }
  }

  function emojiClickHandler(emoji) {
    var lastresult = emojiDictionary[emoji];
    setoutput(lastresult);
  }

  return (
    <div className="App">
      <h1>Emoticon Convey</h1>
      <input onChange={inputChangeHandler}></input>
      <p>{output}</p>
      <h3>Emojis we know</h3>

      {emojiList.map((emoji) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
