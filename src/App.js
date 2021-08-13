import "./styles.css";
import { useState } from "react";

export default function App() {
  const title = "emoji-pedia";
  /* DataBase */
  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤣": "Rolling on the Floor Laughing",
    "🙂": "Slightly Smiling Face",
    "😉": "Winking Face",
    "😍": "Smiling Face with Heart-Eyes"
  };
  const [emojiDesc, setEmojiDesc] = useState("");

  const imageChangeHandler = (event) => {
    var img = event.target.value;
    emojiDictionary[img]
      ? setEmojiDesc(emojiDictionary[img])
      : setEmojiDesc("This emoji is not in the DB");
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "blue"
        }}
      >
        {title}
      </h1>
      <input onChange={imageChangeHandler} />
      <h2>{emojiDesc}</h2>
    </div>
  );
}
